# AES
A comprehensive C program using the Advanced Encryption Standard (AES) for encryption and decryption. The program includes a menu-driven interface, detailed comments, and instructions for compiling and running it on Linux, Windows, or macOS.

## Instructions to Compile and Run
### Prerequisites

**Install the OpenSSL library.**
- On Linux: `sudo apt install libssl-dev`
- On macOS: `brew install openssl`
- On Windows: Use a package like vcpkg or install OpenSSL manually.

Compilation Commands
Linux/macOS bash
`gcc -o aes_encryptor aes_encryptor.c -lssl -lcrypto`

Windows (using MinGW) bash
`gcc -o aes_encryptor aes_encryptor.c -lssl -lcrypto -lws2_32`

Run the Program
`./aes_encryptor`

### How the Program Works
**Encryption**

Takes plaintext from the user.
Encrypts it using AES-256-CBC.
Outputs the ciphertext in hexadecimal format.

**Decryption**

Takes hex-encoded ciphertext from the user.
Decrypts it using the same AES-256-CBC algorithm.
Outputs the original plaintext.

**Key and IV**

Hardcoded for simplicity. In production, generate keys and IVs securely.

**Customization**
Replace the generate_key function to securely generate and store keys using a KMS or secure key management system.
Add more robust error handling and validations.

Let me know if you need enhancements or further assistance!






