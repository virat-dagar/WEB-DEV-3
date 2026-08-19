
// console.log('hello developers');

// // 1. OS -- operating system

// const OS = require('os');

// console.log(OS, typeof OS);
// console.log(OS.freemem());
// console.log(OS.cpus());
// console.log(OS.platform());
// console.log(OS.version());


// // 2. Path module

// const path = require('path');
// console.log(path.resolve());
// console.log(path.resolve()+path.join('/photos/images/1.jpg'));

// // 3. DNS - Domain Name System
const dns = require('dns');
console.log(dns.getServers());

// // explain all the code snippets above and their uses in node.js
// The provided code snippets demonstrate the use of various built-in modules in Node.js, each serving different purposes. Here's an explanation of each snippet and its uses:

// 1. **OS Module**:
//    - The `os` module provides operating system-related utility methods and properties. It allows developers to interact with the underlying operating system.
//    - **Uses**:
//      - `OS.freemem()`: Returns the amount of free system memory in bytes.
//      - `OS.cpus()`: Returns an array of objects containing information about each CPU/core installed on the system.
//      - `OS.platform()`: Returns a string identifying the operating system platform (e.g., 'win32', 'linux').
//      - `OS.version()`: Returns the operating system version.

// 2. **Path Module**:
//    - The `path` module provides utilities for working with file and directory paths. It helps in handling and transforming file paths in a way that is compatible across different operating systems.
//    - **Uses**:
//      - `path.resolve()`: Resolves a sequence of paths or path segments into an absolute path.
//      - `path.join()`: Joins all given path segments together using the platform-specific separator and returns a normalized resulting path.

// 3. **DNS Module**:
//    - The `dns` module provides functions for performing DNS lookups and name resolution. It allows developers to resolve domain names to IP addresses and vice versa.
//    - **Uses**:
//      - `dns.getServers()`: Returns an array of IP addresses of the DNS servers currently being used by the operating system.

// 4. **Crypto Module**:
//    - The `crypto` module provides cryptographic functionality, including a set of wrappers for OpenSSL's hash, HMAC, cipher, decipher, sign, and verify functions. It is used for various cryptographic operations such as hashing, encryption, and decryption.
//    - **Uses**:
//      - Hashing: Convert data into a fixed-size string (digest) for secure storage (e.g., passwords).
//      - HMAC: Verify data integrity and authenticity using a secret key.
//      - Encryption/Decryption: Secure sensitive information using various algorithms.
//      - Digital Signatures: Verify the authenticity of digital messages or documents.
//      - Random Bytes Generation: Create secure tokens or keys.
//      - Key Derivation: Derive keys from passwords securely.

// In summary, these modules provide essential functionalities for interacting with the operating system, handling file paths, performing DNS lookups, and implementing cryptographic operations in Node.js applications.