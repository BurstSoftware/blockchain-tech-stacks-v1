package main
import (
    "context"
    "log"
    "github.com/ethereum/go-ethereum/ethclient"
)
func main() {
    client, err := ethclient.Dial("https://mainnet.infura.io/v3/YOUR_API_KEY")
    if err != nil {
        log.Fatal(err)
    }
    // Interact with blockchain
    _ = client
}
