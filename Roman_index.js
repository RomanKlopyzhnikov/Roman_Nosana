class Block {
    constructor(index, previousHash, timestamp, data, hash) {
        this.index = index;
        this.previousHash = previousHash.toString();
        this.timestamp = timestamp;
        this.data = data;
        this.hash = hash.toString();
    }
}
var generateNextBlock = (blockData) => {
    var previousBlock = getLatestBlock();
    var nextIndex = previousBlock.index + 1;
    var nextTimestamp = new Date().getTime() / 1000;
    var nextHash = calculateHash(nextIndex, previousBlock.hash, nextTimestamp, blockData);
    return new Block(nextIndex, previousBlock.hash, nextTimestamp, blockData, nextHash);
};
TestFramework (ERROR): Assertion failed
Traceback (most recent call last):
  File "./test/functional/test_framework/test_framework.py", line 537, in start_nodes
    node.wait_for_rpc_connection()
  File "./test/functional/test_framework/test_node.py", line 224, in wait_for_rpc_connection
    raise FailedToStartError(self._node_msg(
test_framework.test_node.FailedToStartError: [node 0] bitcoind exited with status 1 during initialization

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "./test/functional/test_framework/test_framework.py", line 132, in main
    self.run_test()
  File "./test/functional/feature_reindex.py", line 36, in run_test
    self.reindex(False)
  File "./test/functional/feature_reindex.py", line 30, in reindex
    self.start_nodes(extra_args)
  File "./test/functional/test_framework/test_framework.py", line 540, in start_nodes
    self.stop_nodes()
  File "./test/functional/test_framework/test_framework.py", line 555, in stop_nodes
    node.stop_node(wait=wait, wait_until_stopped=False)
  File "./test/functional/test_framework/test_node.py", line 335, in stop_node
    self.stop(wait=wait)
  File "./test/functional/test_framework/test_node.py", line 183, in __getattr__
    assert self.rpc_connected and self.rpc is not None, self._node_msg("Error: no RPC connection")
AssertionError: [node 0] Error: no RPC connection
