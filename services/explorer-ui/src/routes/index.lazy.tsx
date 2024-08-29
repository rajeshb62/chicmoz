import { createLazyFileRoute } from "@tanstack/react-router";

const LatestBlockData = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-4">Latest Block Data</h2>
      <ul className="space-y-2">
        <li><strong>Block Number:</strong> {parseInt(blockData.header.globalVariables.blockNumber, 16)}</li>
        <li><strong>Timestamp:</strong> {new Date(parseInt(blockData.header.globalVariables.timestamp, 16) * 1000).toLocaleString()}</li>
        <li><strong>Number of Transactions:</strong> {parseInt(blockData.header.contentCommitment.numTxs.value, 16)}</li>
        <li><strong>Total Fees:</strong> {parseInt(blockData.header.totalFees.value, 16)} (wei)</li>
        <li><strong>State Root:</strong> {blockData.header.state.partial.noteHashTree.root.value}</li>
      </ul>
    </div>
  );
};

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="mx-auto px-[70px] max-w-[1440px]">
      <h1 className="text-center mt-16">{text.exploreThePrivacyOnAztec}</h1>
      <LatestBlockData />
    </div>
  );
}


const text = {
  exploreThePrivacyOnAztec: "Explore the power of privacy on Aztec",
}

const mockBlockData = {
  "archive": {
    "root": {
      "type": "Fr",
      "value": "0x25cb6298471a79ee9cf247f1309a8691eaf2d8032a65b38acae83dad5ae2519e"
    },
    "nextAvailableLeafIndex": 3
  },
  "header": {
    "lastArchive": {
      "root": {
        "type": "Fr",
        "value": "0x274414d9f124a780e7f5ea3b4cab0267386a28ab065f96815e5711dd87414da3"
      },
      "nextAvailableLeafIndex": 3
    },
    "contentCommitment": {
      "numTxs": {
        "type": "Fr",
        "value": "0x0000000000000000000000000000000000000000000000000000000000000003"
      },
      "txsEffectsHash": {
        "type": "Buffer",
        "data": [
          0, 43, 145, 229, 68, 231, 198, 98, 241, 220, 107, 47, 210, 62, 4, 199,
          168, 228, 86, 73, 46, 249, 249, 132, 233, 236, 250, 140, 185, 127, 52,
          244
        ]
      },
      "inHash": {
        "type": "Buffer",
        "data": [
          0, 8, 154, 157, 66, 26, 130, 196, 162, 95, 122, 203, 235, 230, 158,
          99, 141, 91, 6, 79, 168, 166, 14, 1, 135, 147, 220, 176, 190, 83, 117,
          44
        ]
      },
      "outHash": {
        "type": "Buffer",
        "data": [
          0, 219, 79, 36, 214, 239, 247, 152, 62, 193, 99, 208, 44, 35, 13, 106,
          68, 35, 127, 234, 189, 138, 45, 162, 132, 237, 206, 8, 175, 199, 20,
          53
        ]
      }
    },
    "state": {
      "l1ToL2MessageTree": {
        "root": {
          "type": "Fr",
          "value": "0x14f44d672eb357739e42463497f9fdac46623af863eea4d947ca00a497dcdeb3"
        },
        "nextAvailableLeafIndex": 48
      },
      "partial": {
        "noteHashTree": {
          "root": {
            "type": "Fr",
            "value": "0x221de267ab6c1a1323d1e9c552f6d3c3f90ab798b7035416d28cc29aed184644"
          },
          "nextAvailableLeafIndex": 448
        },
        "nullifierTree": {
          "root": {
            "type": "Fr",
            "value": "0x0b3546020bc3b4b2c5f3c685ea2a1d6adc5aea4cfa76c27244d01d7f743177c9"
          },
          "nextAvailableLeafIndex": 576
        },
        "publicDataTree": {
          "root": {
            "type": "Fr",
            "value": "0x23c08a6b1297210c5e24c76b9a936250a1ce2721576c26ea797c7ec35f9e46a9"
          },
          "nextAvailableLeafIndex": 576
        }
      }
    },
    "globalVariables": {
      "chainId": "0x0000000000000000000000000000000000000000000000000000000000007a69",
      "version": "0x0000000000000000000000000000000000000000000000000000000000000001",
      "blockNumber": "0x0000000000000000000000000000000000000000000000000000000000000003",
      "slotNumber": "0x0000000000000000000000000000000000000000000000000000000000000004",
      "timestamp": "0x0000000000000000000000000000000000000000000000000000000066d03764",
      "coinbase": "0x0000000000000000000000000000000000000000",
      "feeRecipient": "0x0000000000000000000000000000000000000000000000000000000000000000",
      "gasFees": {
        "feePerDaGas": "0x0000000000000000000000000000000000000000000000000000000000000001",
        "feePerL2Gas": "0x0000000000000000000000000000000000000000000000000000000000000001"
      }
    },
    "totalFees": {
      "type": "Fr",
      "value": "0x0000000000000000000000000000000000000000000000000000000023c3e590"
    }
  },
  "body": {
    "txEffects": [
      {
        "revertCode": { "code": 0 },
        "transactionFee": {
          "type": "Fr",
          "value": "0x000000000000000000000000000000000000000000000000000000000bebf730"
        },
        "noteHashes": [
          {
            "type": "Fr",
            "value": "0x2ea867c15a5a3cac82e442553f92438cf8cb70b100a077f1b9c293cec0520b03"
          }
        ],
        "nullifiers": [
          {
            "type": "Fr",
            "value": "0x0eabacecf0fce77d800b1104d542d5a9deb8ec673d471b1439144eaa33254e57"
          },
          {
            "type": "Fr",
            "value": "0x26184fb4d8fb9a4c8f47ced841ecf66af6e3236a273bcd5e8cf86915ea9f82e0"
          },
          {
            "type": "Fr",
            "value": "0x183f143cd2a36b0007a992e5c184322f85f0a71f6798b06f2b8659bd683be8b3"
          }
        ],
        "l2ToL1Msgs": [],
        "publicDataWrites": [],
        "noteEncryptedLogsLength": {
          "type": "Fr",
          "value": "0x0000000000000000000000000000000000000000000000000000000000000204"
        },
        "encryptedLogsLength": {
          "type": "Fr",
          "value": "0x0000000000000000000000000000000000000000000000000000000000000000"
        },
        "unencryptedLogsLength": {
          "type": "Fr",
          "value": "0x0000000000000000000000000000000000000000000000000000000000000000"
        },
        "noteEncryptedLogs": {
          "functionLogs": [
            {
              "logs": [
                {
                  "data": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c5b9a51aac7fd111a1427ed783ca9f344956ca498c20bdad6f5a824ed5c1d9568543870717743a28d2dd5e07f894c18038d0750abe28f468ecf644a2a700ea9fd24fba8011ed282b3e1cfa73efb2d24f60bde6ff4233961ef5a80f8933ce28d8841d52c6c9bb234483a65c44c5e5f9c037164d2b0e0642a933e6d37d8636c6f9a98722271259e2f7d0cd008cdf14d43e099346e59aa8e9a2a7e0fa23de910d96c10b76f7de5a7233ba58ba7f66952580c03e39dbf1ede73f8556035c516a09b7b3bf7f231983ba62a9d9b689330a1ffcb0c955d480c77e52cd7eeff2a27b3b1b897b238579e598e394bbcdb21e8719bdeb0a4d1d6949d2092e719b45e9dbf5b48c7b5696bfc6bf6af3be58dd87f12be54e8095949d6ba7ee6b36ae7fbf64f30c22494e604061b8011f16a9dff90eddfd6ced67be19de723a19d2045925c3cbc18c91bec703d6da454b4d029aeed025962694fea4ec63daf43e4261e836b985d5e26b30ce9297db55b0e9efd4ddeee44343c58d1f84fb1bb8a8ac77627a21c93edf390fcf3b5908ea5bfcffd6741179d1b42419b68e7e2ae91a1e1a5993eef1bbc5bb7f205f7f527f8fc3c57897e71d5c6e86f87812db3a2deec5d7447e39852"
                }
              ]
            }
          ]
        },
        "encryptedLogs": { "functionLogs": [{ "logs": [] }] },
        "unencryptedLogs": { "functionLogs": [{ "logs": [] }] }
      },
      {
        "revertCode": { "code": 0 },
        "transactionFee": {
          "type": "Fr",
          "value": "0x000000000000000000000000000000000000000000000000000000000bebf730"
        },
        "noteHashes": [
          {
            "type": "Fr",
            "value": "0x11dc3a5df8a60ef88e3b46a0c4bef44310d4d649f8e7ab9e33868d60e7aad70d"
          }
        ],
        "nullifiers": [
          {
            "type": "Fr",
            "value": "0x187c896ae59b5d65bae9a2716f21b1af1be1807f2dbd967a9bcb7b4fbe8ebcb9"
          },
          {
            "type": "Fr",
            "value": "0x25d96a2beaaf29c3c25d601482d11426d0a651d1a802998e29d57143e7835126"
          },
          {
            "type": "Fr",
            "value": "0x18c5ac09120805fa747c48e43a85359b53c0243069f1ec9518c98acf2ec58026"
          }
        ],
        "l2ToL1Msgs": [],
        "publicDataWrites": [],
        "noteEncryptedLogsLength": {
          "type": "Fr",
          "value": "0x0000000000000000000000000000000000000000000000000000000000000204"
        },
        "encryptedLogsLength": {
          "type": "Fr",
          "value": "0x0000000000000000000000000000000000000000000000000000000000000000"
        },
        "unencryptedLogsLength": {
          "type": "Fr",
          "value": "0x0000000000000000000000000000000000000000000000000000000000000000"
        },
        "noteEncryptedLogs": {
          "functionLogs": [
            {
              "logs": [
                {
                  "data": "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009165c5c3429e017b2929354377dc80a7955ece92022e817c789071607479b69d1f5cae8c0e10c694c963c8d1d9e1928fad618a636286d1cffdcca39ab2c93850d9cfb9058cc64cc38fba4058bb06085887a55699fbbab10a88f8668e951eb2d4c8c19e58276b26820f97a6dcd464d1a4d21b3ac81e8b584afd8e9db1aff7f467fe1566126f4e903f56c440596a3df50067e7ef42c08b0216896e5ff64d22faf4ba1a2d7dcdb9bb8f08fe3723520c52b51d9e770deb4db7e7affdb7f040e3ce00e382e7ce5bb329611c979135e7ca788435fe8866bb1cc076190ce3136abf74ab4cd9ea04efde6c53a418e85d2c923e1db2a503b7e1d60fa16bcb799bf7199f2d9283bf6115bfd324b2309d57f1c0c2b1085319509f9ed3a1e261210f845e36923ab87406317d1d2263fa767273503042d94e993656dacdcdb9d657b3d37534e26250c19641585a935d6f376f2d88eef4df334323b674068bee8dea4c055aee55c4afa5ac4398c32fed58cec66436d32e3fc678644a337cb214dfcaf409988360d9945c9debba66967a0d0b413c3362ba796dfa74f0d49c2bcd72950b75272bc26455211876175f72d520ec5c27420a68cbfaaa400ed5c58cc5da4a589b55b0f1"
                }
              ]
            }
          ]
        },
        "encryptedLogs": { "functionLogs": [{ "logs": [] }] },
        "unencryptedLogs": { "functionLogs": [{ "logs": [] }] }
      },
      {
        "revertCode": { "code": 0 },
        "transactionFee": {
          "type": "Fr",
          "value": "0x000000000000000000000000000000000000000000000000000000000bebf730"
        },
        "noteHashes": [
          {
            "type": "Fr",
            "value": "0x2ab281eb219d350f5eae8dd4406389b76c3fd35a3372d463b58403db48ac2d88"
          }
        ],
        "nullifiers": [
          {
            "type": "Fr",
            "value": "0x222f6149d163a6c54307321f61d98da2041155b472ee1dec3e5059ea7cad1a43"
          },
          {
            "type": "Fr",
            "value": "0x30172fe1ef5662136758cbf013528ee35527d89fb999dbe9f04f80ea61ee4aa2"
          },
          {
            "type": "Fr",
            "value": "0x029755676f9ee0b55d6a4aedf3a3011be042a79f527f7f7a93b606da37fabf9a"
          }
        ],
        "l2ToL1Msgs": [],
        "publicDataWrites": [],
        "noteEncryptedLogsLength": {
          "type": "Fr",
          "value": "0x0000000000000000000000000000000000000000000000000000000000000204"
        },
        "encryptedLogsLength": {
          "type": "Fr",
          "value": "0x0000000000000000000000000000000000000000000000000000000000000000"
        },
        "unencryptedLogsLength": {
          "type": "Fr",
          "value": "0x0000000000000000000000000000000000000000000000000000000000000000"
        },
        "noteEncryptedLogs": {
          "functionLogs": [
            {
              "logs": [
                {
                  "data": "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a5f72db0ce059060bba986b68718246f44aeba9f755cb6f724493f2ce4d9ebb694640caa428482f9bafd4e29527cf1c3c07bffa3b16d6bf19a341435cd6371733f4fed5777bd56125fef087756b011ecf03a98c9cf627fcf0b15ba05dbc8e36172f5de28f86d8afc6adc530d9a52232e1e39abf41eedde0c239bd81c465fe8c09a43a1b454bfb8bd8a20d1887c8057c958674f2c5dd4e6c0224a62a16cb31fb33d6ddea2eae520e2392f80c71b6c818e0141fbc41b0aad940bb3c9ec4664e97d724bfd5e6b4461012481d1772e5d00ab59457128e3605aaea0705a8257c63381254e05367291b30571bafba3ee438622b450e01e51a1bfca4067664d67f0afee9f117d277c6433ca69479e85212c8a0b3af2221d75267f1138aa260785b04e94326eaee05b3acc734abd6566c3ca74691e6649ad39c643a1d09419e90004b00b6e3d3ac56fa60221deaca1683f3595c6d6eeea6bb951bf604fcb51fc87268307d49f42664acb2599200c9c4fbd19f83b5af7f0527c857cc1b8645b772ac471f9196fe37dcc431376f41d04020f2c774be7f194e06ca68f7748757660157ce38eec4ea75799bf4688b41d502c597b58288aa4062160b84a1e5df5ef5c9b3af649"
                }
              ]
            }
          ]
        },
        "encryptedLogs": { "functionLogs": [{ "logs": [] }] },
        "unencryptedLogs": { "functionLogs": [{ "logs": [] }] }
      }
    ]
  }
};

const blockData = mockBlockData;
