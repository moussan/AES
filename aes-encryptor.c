#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <openssl/evp.h>

// Function prototypes
void encrypt_text();
void decrypt_text();
void generate_key(unsigned char *key, unsigned char *iv);

// Main menu function
void menu() {
    int choice;
    do {
        printf("\n=== AES Encryption/Decryption Program ===\n");
        printf("1. Encrypt text\n");
        printf("2. Decrypt text\n");
        printf("3. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);
        getchar(); // Clear the input buffer

        switch (choice) {
            case 1:
                encrypt_text();
                break;
            case 2:
                decrypt_text();
                break;
            case 3:
                printf("Exiting the program. Goodbye!\n");
                break;
            default:
                printf("Invalid choice. Please try again.\n");
        }
    } while (choice != 3);
}

// AES encryption function
void encrypt_text() {
    char plaintext[1024];
    unsigned char ciphertext[1024];
    unsigned char key[32], iv[16];
    int len, ciphertext_len;

    // Generate AES key and IV
    generate_key(key, iv);

    // Get plaintext input from the user
    printf("Enter text to encrypt: ");
    fgets(plaintext, sizeof(plaintext), stdin);
    plaintext[strcspn(plaintext, "\n")] = '\0'; // Remove newline character

    // Initialize OpenSSL context for encryption
    EVP_CIPHER_CTX *ctx = EVP_CIPHER_CTX_new();
    EVP_EncryptInit_ex(ctx, EVP_aes_256_cbc(), NULL, key, iv);

    // Encrypt the plaintext
    EVP_EncryptUpdate(ctx, ciphertext, &len, (unsigned char *)plaintext, strlen(plaintext));
    ciphertext_len = len;

    // Finalize encryption
    EVP_EncryptFinal_ex(ctx, ciphertext + len, &len);
    ciphertext_len += len;

    // Clean up and output
    EVP_CIPHER_CTX_free(ctx);
    printf("Encrypted text (hex): ");
    for (int i = 0; i < ciphertext_len; i++)
        printf("%02x", ciphertext[i]);
    printf("\n");
}

// AES decryption function
void decrypt_text() {
    char ciphertext_hex[2048];
    unsigned char ciphertext[1024], decryptedtext[1024];
    unsigned char key[32], iv[16];
    int len, decryptedtext_len;

    // Generate AES key and IV (same as encryption for demonstration)
    generate_key(key, iv);

    // Get ciphertext input from the user
    printf("Enter hex-encoded text to decrypt: ");
    fgets(ciphertext_hex, sizeof(ciphertext_hex), stdin);
    ciphertext_hex[strcspn(ciphertext_hex, "\n")] = '\0'; // Remove newline character

    // Convert hex input to binary
    int ciphertext_len = strlen(ciphertext_hex) / 2;
    for (int i = 0; i < ciphertext_len; i++) {
        sscanf(&ciphertext_hex[i * 2], "%2hhx", &ciphertext[i]);
    }

    // Initialize OpenSSL context for decryption
    EVP_CIPHER_CTX *ctx = EVP_CIPHER_CTX_new();
    EVP_DecryptInit_ex(ctx, EVP_aes_256_cbc(), NULL, key, iv);

    // Decrypt the ciphertext
    EVP_DecryptUpdate(ctx, decryptedtext, &len, ciphertext, ciphertext_len);
    decryptedtext_len = len;

    // Finalize decryption
    EVP_DecryptFinal_ex(ctx, decryptedtext + len, &len);
    decryptedtext_len += len;

    // Clean up and output
    EVP_CIPHER_CTX_free(ctx);
    decryptedtext[decryptedtext_len] = '\0'; // Null-terminate the string
    printf("Decrypted text: %s\n", decryptedtext);
}

// Key and IV generation (hardcoded for demonstration)
void generate_key(unsigned char *key, unsigned char *iv) {
    // 256-bit key (32 bytes)
    strncpy((char *)key, "01234567890123456789012345678901", 32);

    // 128-bit IV (16 bytes)
    strncpy((char *)iv, "0123456789012345", 16);
}

// Main function
int main() {
    menu();
    return 0;
}
