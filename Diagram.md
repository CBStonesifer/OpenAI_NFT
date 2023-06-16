graph LR
    A(Enter prompt into Photo Generator) --> B(Click 'Generate')
    B--> D{{Photo Generates}}
    B --> |Regenerate| B
    D --> C(Click 'Mint')
    C--> E{{NFT of image minted}}

style A fill:#fff,stroke:#000
style B fill:#3ff,stroke:#000
style C fill:#000,stroke:#000,color:#0ff