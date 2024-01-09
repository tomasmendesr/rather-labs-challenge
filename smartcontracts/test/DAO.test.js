const DAO = artifacts.require("DAO");
const RatherToken = artifacts.require("RatherToken");

contract("DAO", (accounts) => {
  let daoInstance;
  let tokenInstance;

  beforeEach(async () => {
    tokenInstance = await RatherToken.new("TokenName", "TKN");
    daoInstance = await DAO.new(tokenInstance.address);
  });

  it("should create a new proposal", async () => {
    const title = "Proposal 1";
    const description = "This is the first proposal";
    const optionA = "Some option A";
    const optionB = "Some option B";
    const deadline = Math.floor(Date.now() / 1000) + 3600; // Set the deadline 1 hour in the future
    const minVotes = 10;

    await daoInstance.createProposal(title, description, optionA, optionB, deadline, minVotes);

    const proposals = await daoInstance.getAllProposals();
    expect(proposals.length).to.equal(1);

    const proposal = await daoInstance.getProposal(0);
    expect(proposal.title).to.equal(title);
    expect(proposal.description).to.equal(description);
    expect(proposal.proposalDeadline.toNumber()).to.equal(deadline);
    expect(proposal.minimumVotes.toString()).to.equal(minVotes.toString());
  });

  it("should allow voting on a proposal", async () => {
    const title = "Proposal 1";
    const description = "This is the first proposal";
    const optionA = "Some option A";
    const optionB = "Some option B";
    const deadline = Math.floor(Date.now() / 1000) + 3600; // Set the deadline 1 hour in the future
    const minVotes = 10;

    await daoInstance.createProposal(title, description, optionA, optionB, deadline, minVotes);

    await daoInstance.vote(0, 0, { from: accounts[0] });

    const proposal = await daoInstance.getProposal(0);
    expect(proposal.votesForOptionA.toNumber()).to.equal(1);
  });

  it("should change the status of a proposal", async () => {
    const title = "Proposal 1";
    const description = "This is the first proposal";
    const optionA = "Some option A";
    const optionB = "Some option B";
    const deadline = Math.floor(Date.now() / 1000) + 3600; // Set the deadline 1 hour in the future
    const minVotes = 10;

    await daoInstance.createProposal(title, description, optionA, optionB, deadline, minVotes);

    await daoInstance.changeProposalStatus(0, 1);

    const proposal = await daoInstance.getProposal(0);
    expect(proposal.status.toNumber()).to.equal(1);
  });

  it("should prevent a user from voting if they have already voted", async () => {
    const title = "Proposal 1";
    const description = "This is the first proposal";
    const optionA = "Some option A";
    const optionB = "Some option B";
    const deadline = Math.floor(Date.now() / 1000) + 3600; // Set the deadline 1 hour in the future
    const minVotes = 10;
  
    await daoInstance.createProposal(title, description, optionA, optionB, deadline, minVotes);
  
    // Asumiendo que accounts[1] ya ha votado
    await daoInstance.vote(0, 0, { from: accounts[0] });
  
    try {
      // Intenta que accounts[1] vote de nuevo
      await daoInstance.vote(0, 1, { from: accounts[0] });
      // Si llega a este punto, la transacción no ha fallado
      assert.fail("Voting should fail if a user has already voted");
    } catch (error) {
      assert(
        error.message.includes("Already voted"),
        `Unexpected error message: ${error.message}`
      );
    }
  
    const proposal = await daoInstance.getProposal(0);
    // Asegúrate de que el voto anterior de accounts[1] no se haya registrado nuevamente
    expect(proposal.votesForOptionA.toNumber()).to.equal(1);
    expect(proposal.votesForOptionB.toNumber()).to.equal(0);
  });

  it("should prevent a creating a proposal with a wrong deadline", async () => {
    const title = "Proposal 1";
    const description = "This is the first proposal";
    const optionA = "Some option A";
    const optionB = "Some option B";
    const deadline = Math.floor(Date.now() / 1000) - 1; // Set the deadline 1 hour in the future
    const minVotes = 10;
    
    try {
      await daoInstance.createProposal(title, description, optionA, optionB, deadline, minVotes);
      assert.fail("Creation should fail");
    } catch (error) {
      assert(
        error.message.includes("Deadline must be a future date."),
        `Unexpected error message: ${error.message}`
      );
    }
  });
  
  it("should prevent changing the status of a finished proposal", async () => {
    const title = "Proposal 1";
    const description = "This is the first proposal";
    const optionA = "Some option A";
    const optionB = "Some option B";
    const deadline = Math.floor(Date.now() / 1000) + 3600; // Set the deadline 1 hour in the future
    const minVotes = 10;
  
    await daoInstance.createProposal(title, description, optionA, optionB, deadline, minVotes);
    await daoInstance.vote(0, 0, { from: accounts[0] });
    await daoInstance.finishProposal(0);
  
    try {
      await daoInstance.changeProposalStatus(0, 1); // Change to "Closed"
      assert.fail("Changing status of a finished proposal should fail");
    } catch (error) {
      assert(
        error.message.includes("The proposal is already finished"),
        `Unexpected error message: ${error.message}`
      );
    }
  
    const proposal = await daoInstance.getProposal(0);
    expect(proposal.status.toNumber()).to.equal(2);
  });  

  it("should not allow a user to vote if they don't have enough tokens", async () => {
    const title = "Proposal 1";
    const description = "This is the first proposal";
    const optionA = "Some option A";
    const optionB = "Some option B";
    const deadline = Math.floor(Date.now() / 1000) + 3600; // Set the deadline 1 hour in the future
    const minVotes = 10;
  
    await daoInstance.createProposal(title, description, optionA, optionB, deadline, minVotes);
  
    try {
      // Try to vote with an account that doesn't have tokens
      await daoInstance.vote(0, 1, { from: accounts[2] });
      assert.fail("Voting should fail if the user doesn't have enough tokens");
    } catch (error) {
      assert(
        error.message.includes("Not enough tokens to vote"),
        `Unexpected error message: ${error.message}`
      );
    }
  
    const proposal = await daoInstance.getProposal(0);
    expect(proposal.votesForOptionA.toNumber()).to.equal(0);
    expect(proposal.votesForOptionB.toNumber()).to.equal(0);
  });
  
  it("should not allow changing the status by a non-admin user", async () => {
    const title = "Proposal 1";
    const description = "This is the first proposal";
    const optionA = "Some option A";
    const optionB = "Some option B";
    const deadline = Math.floor(Date.now() / 1000) + 3600; // Set the deadline 1 hour in the future
    const minVotes = 10;
  
    await daoInstance.createProposal(title, description, optionA, optionB, deadline, minVotes);
  
    try {
      // Try to change status using a non-admin account
      await daoInstance.changeProposalStatus(0, 1, { from: accounts[2] });
      assert.fail("Changing status should fail for non-admin user");
    } catch (error) {
      assert(
        error.message.includes("Only the admin can call this function"),
        `Unexpected error message: ${error.message}`
      );
    }
  
    const proposal = await daoInstance.getProposal(0);
    expect(proposal.status.toNumber()).to.equal(0); // Status remains pending
  });  
});
