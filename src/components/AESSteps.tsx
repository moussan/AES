import React from 'react';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type AESStep = {
  title: string;
  description: string;
  code: string;
  diagram?: React.ReactNode;
};

const steps: AESStep[] = [
  {
    title: 'Key Expansion',
    description: 'The AES algorithm takes the Cipher Key and performs a key expansion routine to generate a key schedule. The key expansion generates a total of Nb(Nr+1) words.',
    code: `// Key Expansion pseudocode
KeyExpansion(byte key[4*Nk], word w[Nb*(Nr+1)], Nk)
begin
    for i = 0 to Nk-1
        w[i] = word(key[4*i], key[4*i+1], key[4*i+2], key[4*i+3])
    
    for i = Nk to Nb*(Nr+1)-1
        temp = w[i-1]
        if (i mod Nk = 0)
            temp = SubWord(RotWord(temp)) xor Rcon[i/Nk]
        else if (Nk > 6 and i mod Nk = 4)
            temp = SubWord(temp)
        w[i] = w[i-Nk] xor temp
end`,
  },
  {
    title: 'Initial Round',
    description: 'The initial round consists of only one operation: AddRoundKey. In this step, each byte of the state is combined with a byte of the round key using the XOR operation.',
    code: `// Initial Round
AddRoundKey(state, w[0, Nb-1])`,
  },
  {
    title: 'Main Rounds',
    description: 'The main rounds consist of four operations: SubBytes, ShiftRows, MixColumns, and AddRoundKey.',
    code: `// Main Rounds (repeated Nr-1 times)
for round = 1 to Nr-1
    SubBytes(state)
    ShiftRows(state)
    MixColumns(state)
    AddRoundKey(state, w[round*Nb, (round+1)*Nb-1])`,
  },
  {
    title: 'SubBytes',
    description: 'The SubBytes step is a non-linear substitution that operates on each byte of the state independently. Each byte is replaced with another according to a lookup table (S-box).',
    code: `SubBytes(state)
for i = 0 to 3
    for j = 0 to 3
        state[i,j] = S-box[state[i,j]]`,
  },
  {
    title: 'ShiftRows',
    description: 'In the ShiftRows step, bytes in each row of the state are shifted cyclically to the left. The number of places each byte is shifted differs for each row.',
    code: `ShiftRows(state)
// Row 0: No shift
// Row 1: Shift 1 position to left
// Row 2: Shift 2 positions to left
// Row 3: Shift 3 positions to left`,
    diagram: (
      <div className="grid grid-cols-4 gap-1 mt-2 mb-4 max-w-xs mx-auto">
        {/* Row 0 - No shift */}
        <div className="bg-primary-100 dark:bg-primary-900 p-2 text-center text-xs font-mono">a0</div>
        <div className="bg-primary-100 dark:bg-primary-900 p-2 text-center text-xs font-mono">a1</div>
        <div className="bg-primary-100 dark:bg-primary-900 p-2 text-center text-xs font-mono">a2</div>
        <div className="bg-primary-100 dark:bg-primary-900 p-2 text-center text-xs font-mono">a3</div>
        
        {/* Row 1 - Shift 1 */}
        <div className="bg-secondary-100 dark:bg-secondary-900 p-2 text-center text-xs font-mono">b1</div>
        <div className="bg-secondary-100 dark:bg-secondary-900 p-2 text-center text-xs font-mono">b2</div>
        <div className="bg-secondary-100 dark:bg-secondary-900 p-2 text-center text-xs font-mono">b3</div>
        <div className="bg-secondary-100 dark:bg-secondary-900 p-2 text-center text-xs font-mono">b0</div>
        
        {/* Row 2 - Shift 2 */}
        <div className="bg-primary-100 dark:bg-primary-900 p-2 text-center text-xs font-mono">c2</div>
        <div className="bg-primary-100 dark:bg-primary-900 p-2 text-center text-xs font-mono">c3</div>
        <div className="bg-primary-100 dark:bg-primary-900 p-2 text-center text-xs font-mono">c0</div>
        <div className="bg-primary-100 dark:bg-primary-900 p-2 text-center text-xs font-mono">c1</div>
        
        {/* Row 3 - Shift 3 */}
        <div className="bg-secondary-100 dark:bg-secondary-900 p-2 text-center text-xs font-mono">d3</div>
        <div className="bg-secondary-100 dark:bg-secondary-900 p-2 text-center text-xs font-mono">d0</div>
        <div className="bg-secondary-100 dark:bg-secondary-900 p-2 text-center text-xs font-mono">d1</div>
        <div className="bg-secondary-100 dark:bg-secondary-900 p-2 text-center text-xs font-mono">d2</div>
      </div>
    ),
  },
  {
    title: 'MixColumns',
    description: 'The MixColumns step is a mixing operation that operates on the columns of the state, combining the four bytes in each column using a linear transformation.',
    code: `MixColumns(state)
for i = 0 to 3
    column = state[0,i], state[1,i], state[2,i], state[3,i]
    // Matrix multiplication in GF(2^8)
    state[0,i] = 2*column[0] ⊕ 3*column[1] ⊕ column[2] ⊕ column[3]
    state[1,i] = column[0] ⊕ 2*column[1] ⊕ 3*column[2] ⊕ column[3]
    state[2,i] = column[0] ⊕ column[1] ⊕ 2*column[2] ⊕ 3*column[3]
    state[3,i] = 3*column[0] ⊕ column[1] ⊕ column[2] ⊕ 2*column[3]`,
  },
  {
    title: 'AddRoundKey',
    description: 'In the AddRoundKey step, the subkey is combined with the state using a bitwise XOR operation.',
    code: `AddRoundKey(state, roundKey)
for i = 0 to 3
    for j = 0 to 3
        state[i,j] = state[i,j] ⊕ roundKey[i,j]`,
  },
  {
    title: 'Final Round',
    description: 'The final round is similar to the main rounds but omits the MixColumns step.',
    code: `// Final Round
SubBytes(state)
ShiftRows(state)
AddRoundKey(state, w[Nr*Nb, (Nr+1)*Nb-1])`,
  },
];

const AESSteps: React.FC = () => {
  return (
    <div className="space-y-8">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            {index + 1}. {step.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {step.description}
          </p>
          
          {step.diagram && step.diagram}
          
          <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md">
            <SyntaxHighlighter language="c" style={tomorrow} customStyle={{background: 'transparent'}}>
              {step.code}
            </SyntaxHighlighter>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AESSteps; 