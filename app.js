// ========== DATA LAYER (Structured for future Firebase/Supabase) ==========
const DataLayer = {
    getUsers() {
        return JSON.parse(localStorage.getItem('chemlearn_users') || '[]');
    },
    saveUsers(users) {
        localStorage.setItem('chemlearn_users', JSON.stringify(users));
    },
    getCurrentUserId() {
        return localStorage.getItem('chemlearn_current_user');
    },
    setCurrentUserId(userId) {
        localStorage.setItem('chemlearn_current_user', userId);
    },
    getUserData(userId) {
        return JSON.parse(localStorage.getItem(`chemlearn_user_${userId}`) || 'null');
    },
    saveUserData(userId, data) {
        localStorage.setItem(`chemlearn_user_${userId}`, JSON.stringify(data));
    },
    generateUserId() {
        return 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }
};

// ========== TOPICS BY CLASS ==========
const classTopics = {
    6: [
        { id: 'food', name: 'Food: Where Does it Come From?', icon: '🍎' },
        { id: 'materials', name: 'Materials Around Us', icon: '📦' },
        { id: 'separation', name: 'Separation of Substances', icon: '🔬' },
        { id: 'fiber-to-cloth', name: 'Fibre to Fabric', icon: '👕' },
        { id: 'changes', name: 'Changes Around Us', icon: '🔄' },
        { id: 'air', name: 'Getting to Know Air', icon: '🌬️' },
        { id: 'water', name: 'Water in Our Life', icon: '💧' },
        { id: 'sorting', name: 'Sorting Materials into Groups', icon: '📊' }
    ],
    7: [
        { id: 'nutrition', name: 'Nutrition in Plants', icon: '🌱' },
        { id: 'digestion', name: 'Nutrition in Animals', icon: '🐾' },
        { id: 'acids-bases-7', name: 'Acids, Bases and Salts', icon: '🧪' },
        { id: 'physical-chem', name: 'Physical and Chemical Changes', icon: '⚡' },
        { id: 'heat', name: 'Heat and Temperature', icon: '🌡️' },
        { id: 'motion', name: 'Motion and Time', icon: '⏱️' },
        { id: 'light', name: 'Light', icon: '💡' }
    ],
    8: [
        { id: 'crop-production', name: 'Crop Production and Management', icon: '🌾' },
        { id: 'microorganisms', name: 'Microorganisms', icon: '🦠' },
        { id: 'synthetic-fibres', name: 'Synthetic Fibres and Plastics', icon: '♻️' },
        { id: 'materials-metals', name: 'Materials: Metals and Non-Metals', icon: '🔩' },
        { id: 'combustion', name: 'Combustion and Flame', icon: '🔥' },
        { id: 'conservation', name: 'Conservation of Plants and Animals', icon: '🌲' },
        { id: 'force-pressure', name: 'Force and Pressure', icon: '💪' }
    ],
    9: [
        { id: 'matter', name: 'Matter in Our Surroundings', icon: '🌡️' },
        { id: 'atoms', name: 'Atoms and Molecules', icon: '⚛️' },
        { id: 'elements', name: 'Structure of Atom', icon: '🔬' },
        { id: 'solutions', name: 'Solutions', icon: '🧪' },
        { id: 'acids', name: 'Acids, Bases and Salts', icon: '💧' },
        { id: 'reactions', name: 'Chemical Reactions', icon: '⚗️' },
        { id: 'bonding', name: 'Chemical Bonding', icon: '🔗' }
    ],
    10: [
        { id: 'chemical-reactions', name: 'Chemical Reactions & Equations', icon: '⚖️' },
        { id: 'acids-bases', name: 'Acids, Bases and Salts', icon: '🧪' },
        { id: 'metals', name: 'Metals and Non-metals', icon: '🔩' },
        { id: 'carbon', name: 'Carbon and Its Compounds', icon: '💎' },
        { id: 'periodic', name: 'Periodic Classification', icon: '📊' },
        { id: 'electron-config', name: 'Electron Configuration', icon: '⚡' }
    ],
    11: [
        { id: 'structure-atom', name: 'Structure of Atom', icon: '🌀' },
        { id: 'chemical-bonding', name: 'Chemical Bonding', icon: '🔗' },
        { id: 'states', name: 'States of Matter', icon: '❄️' },
        { id: 'thermo', name: 'Thermodynamics', icon: '🔥' },
        { id: 'equilibrium', name: 'Equilibrium', icon: '⚖️' },
        { id: 'redox', name: 'Redox Reactions', icon: '⚡' },
        { id: 'hydrogen', name: 'Hydrogen', icon: '💧' },
        { id: 's-block', name: 's-Block Elements', icon: '🧪' },
        { id: 'organic-hydrocarbons', name: 'Organic Hydrocarbons', icon: '⛽' }
    ],
    12: [
        { id: 'solid-state', name: 'Solid State', icon: '💎' },
        { id: 'solutions-chem', name: 'Solutions', icon: '🧪' },
        { id: 'electrochemistry', name: 'Electrochemistry', icon: '⚡' },
        { id: 'kinetics', name: 'Chemical Kinetics', icon: '⏱️' },
        { id: 'surface', name: 'Surface Chemistry', icon: '🫧' },
        { id: 'p-block', name: 'p-Block Elements', icon: '🔬' },
        { id: 'd-f-block', name: 'd and f Block Elements', icon: '🧲' },
        { id: 'coordination', name: 'Coordination Compounds', icon: '⬡' },
        { id: 'alkyl-halides', name: 'Haloalkanes and Haloarenes', icon: '🧪' },
        { id: 'alcohols', name: 'Alcohols, Phenols & Ethers', icon: '⚗️' },
        { id: 'aldehydes', name: 'Aldehydes, Ketones & Carboxylic Acids', icon: '🔬' },
        { id: 'amines', name: 'Amines', icon: '🧬' },
        { id: 'polymers', name: 'Polymers', icon: '🔗' },
        { id: 'bio', name: 'Biomolecules', icon: '🧬' }
    ]
};

// Quiz questions are loaded from questions.js

// Organic Chemistry Questions
const organicReactions = {
    substitution: [
        { reaction: 'CH₄ + Cl₂ → ?', visual: 'CH₄ + Cl₂ ——UV——→ CH₃Cl + HCl', options: ['CH₃Cl + HCl', 'CH₂Cl₂ + H₂', 'CHCl₃ + H₃', 'CCl₄ + H₄'], correct: 0, hint: 'One H replaced by Cl (free radical substitution).' },
        { reaction: 'C₂H₅OH + HBr → ?', visual: 'C₂H₅OH + HBr ——Δ——→ C₂H₅Br + H₂O', options: ['C₂H₅Br + H₂O', 'C₂H₅OH + HBr', 'C₂H₆ + Br₂', 'CH₂=CH₂ + HBr'], correct: 0, hint: 'OH replaced by Br (nucleophilic substitution).' },
        { reaction: 'C₆H₆ + Br₂ → ?', visual: 'C₆H₆ + Br₂ ——FeBr₃——→ C₆H₅Br + HBr', options: ['C₆H₅Br + HBr', 'C₆H₆Br₂', 'C₆H₅OH + HBr', 'C₆H₅NO₂'], correct: 0, hint: 'Electrophilic aromatic substitution.' },
        { reaction: 'CH₃COOH + C₂H₅OH → ?', visual: 'CH₃COOH + C₂H₅OH ——H⁺——→ CH₃COOC₂H₅ + H₂O', options: ['CH₃COOC₂H₅ + H₂O', 'C₂H₅COOCH₃ + H₂O', 'CH₃COOH + C₂H₅OH', 'CH₃OH + C₂H₅COOH'], correct: 0, hint: 'Fischer esterification.' }
    ],
    addition: [
        { reaction: 'CH₂=CH₂ + HBr → ?', visual: 'CH₂=CH₂ + HBr ——→ CH₃CH₂Br', options: ['CH₃CH₂Br', 'CH₂BrCH₂Br', 'CH₃CH₃ + Br₂', 'CH₃CHBr₂'], correct: 0, hint: 'Electrophilic addition (Markovnikov).' },
        { reaction: 'CH₂=CH₂ + H₂O → ?', visual: 'CH₂=CH₂ + H₂O ——H₃PO₄——→ CH₃CH₂OH', options: ['CH₃CH₂OH', 'CH₂OHCH₂OH', 'CH₃OCH₃', 'CH₃CHO'], correct: 0, hint: 'Hydration gives ethanol.' },
        { reaction: 'CH≡CH + 2H₂ → ?', visual: 'CH≡CH + 2H₂ ——Ni——→ CH₃CH₃', options: ['CH₃CH₃', 'CH₂=CH₂', 'CH₃CH₂CH₃', 'CH₂=CH-CH=CH₂'], correct: 0, hint: 'Complete hydrogenation.' },
        { reaction: 'CH₂=CH₂ + Br₂ → ?', visual: 'CH₂=CH₂ + Br₂ ——CCl₄——→ CH₂BrCH₂Br', options: ['CH₂BrCH₂Br', 'CH₃CHBr₂', 'CH₃CH₃ + Br₂', 'CH₂=CHBr + HBr'], correct: 0, hint: 'Bromine adds across double bond.' }
    ],
    elimination: [
        { reaction: 'CH₃CH₂OH → ?', visual: 'CH₃CH₂OH ——H₂SO₄/170°C——→ CH₂=CH₂ + H₂O', options: ['CH₂=CH₂ + H₂O', 'CH₃CHO + H₂', 'CH₃OCH₃', 'CH₃COOH + H₂'], correct: 0, hint: 'Dehydration of alcohol.' },
        { reaction: 'CH₃CH₂Br + KOH → ?', visual: 'CH₃CH₂Br + KOH(alc) ——Δ——→ CH₂=CH₂ + KBr + H₂O', options: ['CH₂=CH₂ + KBr + H₂O', 'CH₃CH₂OH + KBr', 'CH₃CH₃ + KBrO', 'CH₃CHO + KBr + H₂'], correct: 0, hint: 'Dehydrohalogenation.' },
        { reaction: 'CH₃CHBrCH₃ → ?', visual: 'CH₃CHBrCH₃ ——alc.KOH——→ CH₃CH=CH₂ + HBr', options: ['CH₃CH=CH₂ + HBr', 'CH₃CH₂CH₃ + Br₂', 'CH₃COCH₃', 'CH₃CH₂CH₂Br'], correct: 0, hint: 'β-elimination.' },
        { reaction: 'CH₃CONH₂ → ?', visual: 'CH₃CONH₂ ——Br₂/NaOH——→ CH₃NH₂ + Na₂CO₃', options: ['CH₃NH₂ + Na₂CO₃', 'CH₃COOH + NH₃', 'CH₃CN + H₂O', 'CH₃NO₂ + H₂'], correct: 0, hint: 'Hofmann bromamide degradation.' }
    ],
    oxidation: [
        { reaction: 'CH₃CH₂OH → ?', visual: 'CH₃CH₂OH ——KMnO₄——→ CH₃COOH', options: ['CH₃COOH', 'CH₃CHO', 'CH₃COCH₃', 'CH₂=CH₂'], correct: 0, hint: 'Strong oxidation gives carboxylic acid.' },
        { reaction: 'CH₃CHO → ?', visual: 'CH₃CHO ——Tollen\'s——→ CH₃COO⁻ + Ag↓', options: ['CH₃COO⁻ + Ag↓', 'CH₃COOH + H₂', 'CH₃CH₂OH', 'CH₃COCH₃'], correct: 0, hint: 'Silver mirror test.' },
        { reaction: 'C₆H₅CH₃ → ?', visual: 'C₆H₅CH₃ ——KMnO₄——→ C₆H₅COOH', options: ['C₆H₅COOH', 'C₆H₅CHO', 'C₆H₅OH', 'C₆H₆ + CO₂'], correct: 0, hint: 'Side chain oxidation.' },
        { reaction: 'CH₂=CH₂ → ?', visual: 'CH₂=CH₂ ——KMnO₄(cold,dil)——→ CH₂OHCH₂OH', options: ['CH₂OHCH₂OH', 'CH₃CHO', 'CH₃COOH', 'CO₂ + H₂O'], correct: 0, hint: 'Baeyer\'s test gives diol.' }
    ]
};

// ========== PERIODIC TABLE DATA ==========
const periodicElements = [
    { number: 1, symbol: 'H', name: 'Hydrogen', mass: 1.008, category: 'nonmetal', config: '1s1', period: 1, group: 1 },
    { number: 2, symbol: 'He', name: 'Helium', mass: 4.003, category: 'noble', config: '1s2', period: 1, group: 18 },
    { number: 3, symbol: 'Li', name: 'Lithium', mass: 6.941, category: 'alkali', config: '[He]2s1', period: 2, group: 1 },
    { number: 4, symbol: 'Be', name: 'Beryllium', mass: 9.012, category: 'alkaline', config: '[He]2s2', period: 2, group: 2 },
    { number: 5, symbol: 'B', name: 'Boron', mass: 10.81, category: 'metalloid', config: '[He]2s2 2p1', period: 2, group: 13 },
    { number: 6, symbol: 'C', name: 'Carbon', mass: 12.01, category: 'nonmetal', config: '[He]2s2 2p2', period: 2, group: 14 },
    { number: 7, symbol: 'N', name: 'Nitrogen', mass: 14.01, category: 'nonmetal', config: '[He]2s2 2p3', period: 2, group: 15 },
    { number: 8, symbol: 'O', name: 'Oxygen', mass: 16.00, category: 'nonmetal', config: '[He]2s2 2p4', period: 2, group: 16 },
    { number: 9, symbol: 'F', name: 'Fluorine', mass: 19.00, category: 'halogen', config: '[He]2s2 2p5', period: 2, group: 17 },
    { number: 10, symbol: 'Ne', name: 'Neon', mass: 20.18, category: 'noble', config: '[He]2s2 2p6', period: 2, group: 18 },
    { number: 11, symbol: 'Na', name: 'Sodium', mass: 22.99, category: 'alkali', config: '[Ne]3s1', period: 3, group: 1 },
    { number: 12, symbol: 'Mg', name: 'Magnesium', mass: 24.31, category: 'alkaline', config: '[Ne]3s2', period: 3, group: 2 },
    { number: 13, symbol: 'Al', name: 'Aluminium', mass: 26.98, category: 'post-transition', config: '[Ne]3s2 3p1', period: 3, group: 13 },
    { number: 14, symbol: 'Si', name: 'Silicon', mass: 28.09, category: 'metalloid', config: '[Ne]3s2 3p2', period: 3, group: 14 },
    { number: 15, symbol: 'P', name: 'Phosphorus', mass: 30.97, category: 'nonmetal', config: '[Ne]3s2 3p3', period: 3, group: 15 },
    { number: 16, symbol: 'S', name: 'Sulfur', mass: 32.07, category: 'nonmetal', config: '[Ne]3s2 3p4', period: 3, group: 16 },
    { number: 17, symbol: 'Cl', name: 'Chlorine', mass: 35.45, category: 'halogen', config: '[Ne]3s2 3p5', period: 3, group: 17 },
    { number: 18, symbol: 'Ar', name: 'Argon', mass: 39.95, category: 'noble', config: '[Ne]3s2 3p6', period: 3, group: 18 },
    { number: 19, symbol: 'K', name: 'Potassium', mass: 39.10, category: 'alkali', config: '[Ar]4s1', period: 4, group: 1 },
    { number: 20, symbol: 'Ca', name: 'Calcium', mass: 40.08, category: 'alkaline', config: '[Ar]4s2', period: 4, group: 2 },
    { number: 21, symbol: 'Sc', name: 'Scandium', mass: 44.96, category: 'transition', config: '[Ar]3d1 4s2', period: 4, group: 3 },
    { number: 22, symbol: 'Ti', name: 'Titanium', mass: 47.87, category: 'transition', config: '[Ar]3d2 4s2', period: 4, group: 4 },
    { number: 23, symbol: 'V', name: 'Vanadium', mass: 50.94, category: 'transition', config: '[Ar]3d3 4s2', period: 4, group: 5 },
    { number: 24, symbol: 'Cr', name: 'Chromium', mass: 52.00, category: 'transition', config: '[Ar]3d5 4s1', period: 4, group: 6 },
    { number: 25, symbol: 'Mn', name: 'Manganese', mass: 54.94, category: 'transition', config: '[Ar]3d5 4s2', period: 4, group: 7 },
    { number: 26, symbol: 'Fe', name: 'Iron', mass: 55.85, category: 'transition', config: '[Ar]3d6 4s2', period: 4, group: 8 },
    { number: 27, symbol: 'Co', name: 'Cobalt', mass: 58.93, category: 'transition', config: '[Ar]3d7 4s2', period: 4, group: 9 },
    { number: 28, symbol: 'Ni', name: 'Nickel', mass: 58.69, category: 'transition', config: '[Ar]3d8 4s2', period: 4, group: 10 },
    { number: 29, symbol: 'Cu', name: 'Copper', mass: 63.55, category: 'transition', config: '[Ar]3d10 4s1', period: 4, group: 11 },
    { number: 30, symbol: 'Zn', name: 'Zinc', mass: 65.38, category: 'transition', config: '[Ar]3d10 4s2', period: 4, group: 12 },
    { number: 31, symbol: 'Ga', name: 'Gallium', mass: 69.72, category: 'post-transition', config: '[Ar]3d10 4s2 4p1', period: 4, group: 13 },
    { number: 32, symbol: 'Ge', name: 'Germanium', mass: 72.63, category: 'metalloid', config: '[Ar]3d10 4s2 4p2', period: 4, group: 14 },
    { number: 33, symbol: 'As', name: 'Arsenic', mass: 74.92, category: 'metalloid', config: '[Ar]3d10 4s2 4p3', period: 4, group: 15 },
    { number: 34, symbol: 'Se', name: 'Selenium', mass: 78.97, category: 'nonmetal', config: '[Ar]3d10 4s2 4p4', period: 4, group: 16 },
    { number: 35, symbol: 'Br', name: 'Bromine', mass: 79.90, category: 'halogen', config: '[Ar]3d10 4s2 4p5', period: 4, group: 17 },
    { number: 36, symbol: 'Kr', name: 'Krypton', mass: 83.80, category: 'noble', config: '[Ar]3d10 4s2 4p6', period: 4, group: 18 },
    { number: 37, symbol: 'Rb', name: 'Rubidium', mass: 85.47, category: 'alkali', config: '[Kr]5s1', period: 5, group: 1 },
    { number: 38, symbol: 'Sr', name: 'Strontium', mass: 87.62, category: 'alkaline', config: '[Kr]5s2', period: 5, group: 2 },
    { number: 39, symbol: 'Y', name: 'Yttrium', mass: 88.91, category: 'transition', config: '[Kr]4d1 5s2', period: 5, group: 3 },
    { number: 40, symbol: 'Zr', name: 'Zirconium', mass: 91.22, category: 'transition', config: '[Kr]4d2 5s2', period: 5, group: 4 },
    { number: 41, symbol: 'Nb', name: 'Niobium', mass: 92.91, category: 'transition', config: '[Kr]4d4 5s1', period: 5, group: 5 },
    { number: 42, symbol: 'Mo', name: 'Molybdenum', mass: 95.95, category: 'transition', config: '[Kr]4d5 5s1', period: 5, group: 6 },
    { number: 43, symbol: 'Tc', name: 'Technetium', mass: 98, category: 'transition', config: '[Kr]4d5 5s2', period: 5, group: 7 },
    { number: 44, symbol: 'Ru', name: 'Ruthenium', mass: 101.1, category: 'transition', config: '[Kr]4d7 5s1', period: 5, group: 8 },
    { number: 45, symbol: 'Rh', name: 'Rhodium', mass: 102.9, category: 'transition', config: '[Kr]4d8 5s1', period: 5, group: 9 },
    { number: 46, symbol: 'Pd', name: 'Palladium', mass: 106.4, category: 'transition', config: '[Kr]4d10', period: 5, group: 10 },
    { number: 47, symbol: 'Ag', name: 'Silver', mass: 107.9, category: 'transition', config: '[Kr]4d10 5s1', period: 5, group: 11 },
    { number: 48, symbol: 'Cd', name: 'Cadmium', mass: 112.4, category: 'transition', config: '[Kr]4d10 5s2', period: 5, group: 12 },
    { number: 49, symbol: 'In', name: 'Indium', mass: 114.8, category: 'post-transition', config: '[Kr]4d10 5s2 5p1', period: 5, group: 13 },
    { number: 50, symbol: 'Sn', name: 'Tin', mass: 118.7, category: 'post-transition', config: '[Kr]4d10 5s2 5p2', period: 5, group: 14 },
    { number: 51, symbol: 'Sb', name: 'Antimony', mass: 121.8, category: 'metalloid', config: '[Kr]4d10 5s2 5p3', period: 5, group: 15 },
    { number: 52, symbol: 'Te', name: 'Tellurium', mass: 127.6, category: 'metalloid', config: '[Kr]4d10 5s2 5p4', period: 5, group: 16 },
    { number: 53, symbol: 'I', name: 'Iodine', mass: 126.9, category: 'halogen', config: '[Kr]4d10 5s2 5p5', period: 5, group: 17 },
    { number: 54, symbol: 'Xe', name: 'Xenon', mass: 131.3, category: 'noble', config: '[Kr]4d10 5s2 5p6', period: 5, group: 18 },
    { number: 55, symbol: 'Cs', name: 'Caesium', mass: 132.9, category: 'alkali', config: '[Xe]6s1', period: 6, group: 1 },
    { number: 56, symbol: 'Ba', name: 'Barium', mass: 137.3, category: 'alkaline', config: '[Xe]6s2', period: 6, group: 2 },
    { number: 57, symbol: 'La', name: 'Lanthanum', mass: 138.9, category: 'lanthanide', config: '[Xe]5d1 6s2', period: 6, group: 3 },
    { number: 58, symbol: 'Ce', name: 'Cerium', mass: 140.1, category: 'lanthanide', config: '[Xe]4f1 5d1 6s2', period: 6, group: 3 },
    { number: 59, symbol: 'Pr', name: 'Praseodymium', mass: 140.9, category: 'lanthanide', config: '[Xe]4f3 6s2', period: 6, group: 3 },
    { number: 60, symbol: 'Nd', name: 'Neodymium', mass: 144.2, category: 'lanthanide', config: '[Xe]4f4 6s2', period: 6, group: 3 },
    { number: 61, symbol: 'Pm', name: 'Promethium', mass: 145, category: 'lanthanide', config: '[Xe]4f5 6s2', period: 6, group: 3 },
    { number: 62, symbol: 'Sm', name: 'Samarium', mass: 150.4, category: 'lanthanide', config: '[Xe]4f6 6s2', period: 6, group: 3 },
    { number: 63, symbol: 'Eu', name: 'Europium', mass: 152.0, category: 'lanthanide', config: '[Xe]4f7 6s2', period: 6, group: 3 },
    { number: 64, symbol: 'Gd', name: 'Gadolinium', mass: 157.3, category: 'lanthanide', config: '[Xe]4f7 5d1 6s2', period: 6, group: 3 },
    { number: 65, symbol: 'Tb', name: 'Terbium', mass: 158.9, category: 'lanthanide', config: '[Xe]4f9 6s2', period: 6, group: 3 },
    { number: 66, symbol: 'Dy', name: 'Dysprosium', mass: 162.5, category: 'lanthanide', config: '[Xe]4f10 6s2', period: 6, group: 3 },
    { number: 67, symbol: 'Ho', name: 'Holmium', mass: 164.9, category: 'lanthanide', config: '[Xe]4f11 6s2', period: 6, group: 3 },
    { number: 68, symbol: 'Er', name: 'Erbium', mass: 167.3, category: 'lanthanide', config: '[Xe]4f12 6s2', period: 6, group: 3 },
    { number: 69, symbol: 'Tm', name: 'Thulium', mass: 168.9, category: 'lanthanide', config: '[Xe]4f13 6s2', period: 6, group: 3 },
    { number: 70, symbol: 'Yb', name: 'Ytterbium', mass: 173.0, category: 'lanthanide', config: '[Xe]4f14 6s2', period: 6, group: 3 },
    { number: 71, symbol: 'Lu', name: 'Lutetium', mass: 175.0, category: 'lanthanide', config: '[Xe]4f14 5d1 6s2', period: 6, group: 3 },
    { number: 72, symbol: 'Hf', name: 'Hafnium', mass: 178.5, category: 'transition', config: '[Xe]4f14 5d2 6s2', period: 6, group: 4 },
    { number: 73, symbol: 'Ta', name: 'Tantalum', mass: 180.9, category: 'transition', config: '[Xe]4f14 5d3 6s2', period: 6, group: 5 },
    { number: 74, symbol: 'W', name: 'Tungsten', mass: 183.8, category: 'transition', config: '[Xe]4f14 5d4 6s2', period: 6, group: 6 },
    { number: 75, symbol: 'Re', name: 'Rhenium', mass: 186.2, category: 'transition', config: '[Xe]4f14 5d5 6s2', period: 6, group: 7 },
    { number: 76, symbol: 'Os', name: 'Osmium', mass: 190.2, category: 'transition', config: '[Xe]4f14 5d6 6s2', period: 6, group: 8 },
    { number: 77, symbol: 'Ir', name: 'Iridium', mass: 192.2, category: 'transition', config: '[Xe]4f14 5d7 6s2', period: 6, group: 9 },
    { number: 78, symbol: 'Pt', name: 'Platinum', mass: 195.1, category: 'transition', config: '[Xe]4f14 5d9 6s1', period: 6, group: 10 },
    { number: 79, symbol: 'Au', name: 'Gold', mass: 197.0, category: 'transition', config: '[Xe]4f14 5d10 6s1', period: 6, group: 11 },
    { number: 80, symbol: 'Hg', name: 'Mercury', mass: 200.6, category: 'transition', config: '[Xe]4f14 5d10 6s2', period: 6, group: 12 },
    { number: 81, symbol: 'Tl', name: 'Thallium', mass: 204.4, category: 'post-transition', config: '[Xe]4f14 5d10 6s2 6p1', period: 6, group: 13 },
    { number: 82, symbol: 'Pb', name: 'Lead', mass: 207.2, category: 'post-transition', config: '[Xe]4f14 5d10 6s2 6p2', period: 6, group: 14 },
    { number: 83, symbol: 'Bi', name: 'Bismuth', mass: 209.0, category: 'post-transition', config: '[Xe]4f14 5d10 6s2 6p3', period: 6, group: 15 },
    { number: 84, symbol: 'Po', name: 'Polonium', mass: 209, category: 'post-transition', config: '[Xe]4f14 5d10 6s2 6p4', period: 6, group: 16 },
    { number: 85, symbol: 'At', name: 'Astatine', mass: 210, category: 'halogen', config: '[Xe]4f14 5d10 6s2 6p5', period: 6, group: 17 },
    { number: 86, symbol: 'Rn', name: 'Radon', mass: 222, category: 'noble', config: '[Xe]4f14 5d10 6s2 6p6', period: 6, group: 18 },
    { number: 87, symbol: 'Fr', name: 'Francium', mass: 223, category: 'alkali', config: '[Rn]7s1', period: 7, group: 1 },
    { number: 88, symbol: 'Ra', name: 'Radium', mass: 226, category: 'alkaline', config: '[Rn]7s2', period: 7, group: 2 },
    { number: 89, symbol: 'Ac', name: 'Actinium', mass: 227, category: 'actinide', config: '[Rn]6d1 7s2', period: 7, group: 3 },
    { number: 90, symbol: 'Th', name: 'Thorium', mass: 232.0, category: 'actinide', config: '[Rn]6d2 7s2', period: 7, group: 3 },
    { number: 91, symbol: 'Pa', name: 'Protactinium', mass: 231.0, category: 'actinide', config: '[Rn]5f2 6d1 7s2', period: 7, group: 3 },
    { number: 92, symbol: 'U', name: 'Uranium', mass: 238.0, category: 'actinide', config: '[Rn]5f3 6d1 7s2', period: 7, group: 3 },
    { number: 93, symbol: 'Np', name: 'Neptunium', mass: 237, category: 'actinide', config: '[Rn]5f4 6d1 7s2', period: 7, group: 3 },
    { number: 94, symbol: 'Pu', name: 'Plutonium', mass: 244, category: 'actinide', config: '[Rn]5f6 7s2', period: 7, group: 3 },
    { number: 95, symbol: 'Am', name: 'Americium', mass: 243, category: 'actinide', config: '[Rn]5f7 7s2', period: 7, group: 3 },
    { number: 96, symbol: 'Cm', name: 'Curium', mass: 247, category: 'actinide', config: '[Rn]5f7 6d1 7s2', period: 7, group: 3 },
    { number: 97, symbol: 'Bk', name: 'Berkelium', mass: 247, category: 'actinide', config: '[Rn]5f9 7s2', period: 7, group: 3 },
    { number: 98, symbol: 'Cf', name: 'Californium', mass: 251, category: 'actinide', config: '[Rn]5f10 7s2', period: 7, group: 3 },
    { number: 99, symbol: 'Es', name: 'Einsteinium', mass: 252, category: 'actinide', config: '[Rn]5f11 7s2', period: 7, group: 3 },
    { number: 100, symbol: 'Fm', name: 'Fermium', mass: 257, category: 'actinide', config: '[Rn]5f12 7s2', period: 7, group: 3 },
    { number: 101, symbol: 'Md', name: 'Mendelevium', mass: 258, category: 'actinide', config: '[Rn]5f13 7s2', period: 7, group: 3 },
    { number: 102, symbol: 'No', name: 'Nobelium', mass: 259, category: 'actinide', config: '[Rn]5f14 7s2', period: 7, group: 3 },
    { number: 103, symbol: 'Lr', name: 'Lawrencium', mass: 266, category: 'actinide', config: '[Rn]5f14 7s2 7p1', period: 7, group: 3 },
    { number: 104, symbol: 'Rf', name: 'Rutherfordium', mass: 267, category: 'transition', config: '[Rn]5f14 6d2 7s2', period: 7, group: 4 },
    { number: 105, symbol: 'Db', name: 'Dubnium', mass: 268, category: 'transition', config: '[Rn]5f14 6d3 7s2', period: 7, group: 5 },
    { number: 106, symbol: 'Sg', name: 'Seaborgium', mass: 269, category: 'transition', config: '[Rn]5f14 6d4 7s2', period: 7, group: 6 },
    { number: 107, symbol: 'Bh', name: 'Bohrium', mass: 270, category: 'transition', config: '[Rn]5f14 6d5 7s2', period: 7, group: 7 },
    { number: 108, symbol: 'Hs', name: 'Hassium', mass: 277, category: 'transition', config: '[Rn]5f14 6d6 7s2', period: 7, group: 8 },
    { number: 109, symbol: 'Mt', name: 'Meitnerium', mass: 278, category: 'transition', config: '[Rn]5f14 6d7 7s2', period: 7, group: 9 },
    { number: 110, symbol: 'Ds', name: 'Darmstadtium', mass: 281, category: 'transition', config: '[Rn]5f14 6d8 7s2', period: 7, group: 10 },
    { number: 111, symbol: 'Rg', name: 'Roentgenium', mass: 282, category: 'transition', config: '[Rn]5f14 6d9 7s2', period: 7, group: 11 },
    { number: 112, symbol: 'Cn', name: 'Copernicium', mass: 285, category: 'transition', config: '[Rn]5f14 6d10 7s2', period: 7, group: 12 },
    { number: 113, symbol: 'Nh', name: 'Nihonium', mass: 286, category: 'post-transition', config: '[Rn]5f14 6d10 7s2 7p1', period: 7, group: 13 },
    { number: 114, symbol: 'Fl', name: 'Flerovium', mass: 289, category: 'post-transition', config: '[Rn]5f14 6d10 7s2 7p2', period: 7, group: 14 },
    { number: 115, symbol: 'Mc', name: 'Moscovium', mass: 290, category: 'post-transition', config: '[Rn]5f14 6d10 7s2 7p3', period: 7, group: 15 },
    { number: 116, symbol: 'Lv', name: 'Livermorium', mass: 293, category: 'post-transition', config: '[Rn]5f14 6d10 7s2 7p4', period: 7, group: 16 },
    { number: 117, symbol: 'Ts', name: 'Tennessine', mass: 294, category: 'halogen', config: '[Rn]5f14 6d10 7s2 7p5', period: 7, group: 17 },
    { number: 118, symbol: 'Og', name: 'Oganesson', mass: 294, category: 'noble', config: '[Rn]5f14 6d10 7s2 7p6', period: 7, group: 18 }
];

// ========== ELEMENT USES & PROPERTIES ==========
const elementUses = {
    1: { uses: 'Fuel cells, ammonia synthesis, hydrogenation of oils, rocket fuel', state: 'Gas', block: 's' },
    2: { uses: 'Balloons, deep-sea diving gas mixtures, cryogenic applications', state: 'Gas', block: 's' },
    3: { uses: 'Batteries, ceramics, pharmaceuticals, lubricants', state: 'Solid', block: 's' },
    4: { uses: 'Aerospace alloys, X-ray windows, nuclear reactors', state: 'Solid', block: 's' },
    5: { uses: 'Glass (borosilicate), detergents, semiconductors', state: 'Solid', block: 'p' },
    6: { uses: 'Steel production, fuels, polymers, diamonds for cutting', state: 'Solid', block: 'p' },
    7: { uses: 'Fertilizers, explosives (TNT), liquid nitrogen for cooling', state: 'Gas', block: 'p' },
    8: { uses: 'Respiration, steel production, medical oxygen, welding', state: 'Gas', block: 'p' },
    9: { uses: 'Toothpaste (fluoride), Teflon, refrigerants, uranium enrichment', state: 'Gas', block: 'p' },
    10: { uses: 'Neon signs, lasers, cryogenic refrigerant, indicator tubes', state: 'Gas', block: 'p' },
    11: { uses: 'Table salt (NaCl), street lights (sodium vapor), soap making', state: 'Solid', block: 's' },
    12: { uses: 'Lightweight alloys, fireworks (bright white), medicine (antacids)', state: 'Solid', block: 's' },
    13: { uses: 'Aircraft, packaging foil, cookware, electrical wiring', state: 'Solid', block: 'p' },
    14: { uses: 'Computer chips (semiconductors), glass, silicone, solar cells', state: 'Solid', block: 'p' },
    15: { uses: 'Fertilizers, safety matches, detergents, phosphorescent materials', state: 'Solid', block: 'p' },
    16: { uses: 'Sulfuric acid production, vulcanization of rubber, fungicides', state: 'Solid', block: 'p' },
    17: { uses: 'Water purification, PVC production, bleach, disinfectants', state: 'Gas', block: 'p' },
    18: { uses: 'Welding shield gas, fluorescent lights, MRI cooling, balloons', state: 'Gas', block: 'p' },
    19: { uses: 'Fertilizers (potash), soap, glass, battery electrolyte', state: 'Solid', block: 's' },
    20: { uses: 'Cement, plaster, steel production, water treatment', state: 'Solid', block: 's' },
    21: { uses: 'Aerospace alloys, bicycle frames, baseball bats', state: 'Solid', block: 'd' },
    22: { uses: 'Aircraft (Ti-6Al-4V), medical implants, paint (TiO2)', state: 'Solid', block: 'd' },
    23: { uses: 'Steel strengthening, catalysts, vanadium redox batteries', state: 'Solid', block: 'd' },
    24: { uses: 'Stainless steel, chrome plating, dyes, tanning leather', state: 'Solid', block: 'd' },
    25: { uses: 'Steel production, batteries (MnO2), water treatment', state: 'Solid', block: 'd' },
    26: { uses: 'Construction (steel), hemoglobin, magnets, catalysts', state: 'Solid', block: 'd' },
    27: { uses: 'Superalloys, magnets, battery electrodes, blue pigments', state: 'Solid', block: 'd' },
    28: { uses: 'Stainless steel, coins, electroplating, batteries (NiMH)', state: 'Solid', block: 'd' },
    29: { uses: 'Electrical wiring, plumbing, electronics, heat exchangers', state: 'Solid', block: 'd' },
    30: { uses: 'Galvanizing iron, alloys (brass), batteries, sunscreen (ZnO)', state: 'Solid', block: 'd' },
    31: { uses: 'Semiconductors, LEDs, solar cells, thermometers (low mp)', state: 'Solid', block: 'p' },
    32: { uses: 'Fiber optics, infrared optics, polymerization catalysts', state: 'Solid', block: 'p' },
    33: { uses: 'Semiconductors, wood preservatives, pesticides, pyrotechnics', state: 'Solid', block: 'p' },
    34: { uses: 'Vulcanization of rubber, glass manufacturing, photocells', state: 'Solid', block: 'p' },
    35: { uses: 'Water disinfection, photography (AgBr), fire retardants', state: 'Liquid', block: 'p' },
    36: { uses: 'Fluorescent lamps, insulating windows, medical imaging', state: 'Gas', block: 'p' },
    37: { uses: 'Atomic clocks, medical imaging (Rb-82 PET)', state: 'Solid', block: 's' },
    38: { uses: 'Fireworks (red color), TV tubes, ferrite magnets', state: 'Solid', block: 's' },
    39: { uses: 'LEDs, lasers, superconductors, camera lenses', state: 'Solid', block: 'd' },
    40: { uses: 'Nuclear reactors, cubic zirconia, chemical reactors', state: 'Solid', block: 'd' },
    41: { uses: 'Jet engines, MRI superconducting magnets, jewelry', state: 'Solid', block: 'd' },
    42: { uses: 'Steel alloys, catalysts, lubricants, electronics', state: 'Solid', block: 'd' },
    43: { uses: 'Medical imaging (Tc-99m), nuclear medicine research', state: 'Solid', block: 'd' },
    44: { uses: 'Catalysts, electronics, hard disk drives, solar cells', state: 'Solid', block: 'd' },
    45: { uses: 'Catalytic converters, jewelry plating, electronics', state: 'Solid', block: 'd' },
    46: { uses: 'Catalytic converters, fuel cells, dentistry (crowns)', state: 'Solid', block: 'd' },
    47: { uses: 'Jewelry, photography, electronics, coins, antimicrobial', state: 'Solid', block: 'd' },
    48: { uses: 'Nickel-cadmium batteries, pigments, electroplating', state: 'Solid', block: 'd' },
    49: { uses: 'Touchscreens (ITO), solders, semiconductors', state: 'Solid', block: 'p' },
    50: { uses: 'Tin cans, solder, bronze alloys, organotin compounds', state: 'Solid', block: 'p' },
    51: { uses: 'Flame retardants, lead-acid batteries, semiconductors', state: 'Solid', block: 'p' },
    52: { uses: 'Solar panels, thermoelectric devices, metallurgy', state: 'Solid', block: 'p' },
    53: { uses: 'Water purification, antiseptics, photography, medicine', state: 'Solid', block: 'p' },
    54: { uses: 'Lighting, anesthesia, ion propulsion, flash photography', state: 'Gas', block: 'p' },
    55: { uses: 'Atomic clocks, photoelectric cells, medical imaging', state: 'Solid', block: 's' },
    56: { uses: 'X-ray imaging, fireworks (green), drilling oil wells', state: 'Solid', block: 's' },
    57: { uses: 'Camera lenses, catalytic converters, lighter flint', state: 'Solid', block: 'f' },
    58: { uses: 'Catalysts, glass polishing, lighter flint, self-cleaning ovens', state: 'Solid', block: 'f' },
    59: { uses: 'High-strength alloys, magnets, coloring glass (didymium)', state: 'Solid', block: 'f' },
    60: { uses: 'Magnets (NdFeB), lasers, colorings, glass manufacturing', state: 'Solid', block: 'f' },
    61: { uses: 'Nuclear batteries (Pm-147), luminous paint, research', state: 'Solid', block: 'f' },
    62: { uses: 'Magnets, nuclear reactor control rods, cancer treatment', state: 'Solid', block: 'f' },
    63: { uses: 'Red phosphors (TV screens), anti-counterfeiting, magnets', state: 'Solid', block: 'f' },
    64: { uses: 'MRI contrast agents, hard drives (GdFeCo), neutron capture', state: 'Solid', block: 'f' },
    65: { uses: 'Terbium phosphors (green), sonar systems, magnetostrictive alloys', state: 'Solid', block: 'f' },
    66: { uses: 'Magnets, data storage, nuclear reactors, laser materials', state: 'Solid', block: 'f' },
    67: { uses: 'MRI contrast agents, nuclear reactors, powerful magnets', state: 'Solid', block: 'f' },
    68: { uses: 'Fiber optics, lasers, nuclear reactors, metallurgy', state: 'Solid', block: 'f' },
    69: { uses: 'Portable X-ray devices, laser materials, nuclear reactors', state: 'Solid', block: 'f' },
    70: { uses: 'Metallurgy, portable X-ray devices, steel alloys', state: 'Solid', block: 'f' },
    71: { uses: 'PET scan detectors, cancer therapy, research', state: 'Solid', block: 'f' },
    72: { uses: 'Nuclear reactors, superalloys (jet engines), camera lenses', state: 'Solid', block: 'd' },
    73: { uses: 'Capacitors, surgical instruments,jet engine blades', state: 'Solid', block: 'd' },
    74: { uses: 'Light bulb filaments, cutting tools, armor-piercing ammo', state: 'Solid', block: 'd' },
    75: { uses: 'Jet engine parts, thermocouples, catalysts', state: 'Solid', block: 'd' },
    76: { uses: 'Fountain pen tips, electrical contacts, fingerprint detection', state: 'Solid', block: 'd' },
    77: { uses: 'Spark plugs, crucibles, electrical contacts, magnets', state: 'Solid', block: 'd' },
    78: { uses: 'Jewelry, catalytic converters, electronics, laboratory equipment', state: 'Solid', block: 'd' },
    79: { uses: 'Jewelry, electronics (connectors), dentistry, gold standard', state: 'Solid', block: 'd' },
    80: { uses: 'Thermometers, barometers, fluorescent lamps, dental fillings', state: 'Liquid', block: 'd' },
    81: { uses: 'Superconductors, medical imaging (Tl-201), electronics', state: 'Solid', block: 'p' },
    82: { uses: 'Batteries (lead-acid), radiation shielding, solder, ammunition', state: 'Solid', block: 'p' },
    83: { uses: 'Bismuth compounds (Pepto-Bismol), cosmetics, shot (non-toxic)', state: 'Solid', block: 'p' },
    84: { uses: 'Static eliminators, thermoelectric devices, nuclear research', state: 'Solid', block: 'p' },
    85: { uses: 'Cancer treatment (At-211), smoke detectors (research)', state: 'Solid', block: 'p' },
    86: { uses: 'Cancer treatment (Rn-222), earthquake prediction research', state: 'Gas', block: 'p' },
    87: { uses: 'Cancer treatment research, atomic physics studies', state: 'Solid', block: 's' },
    88: { uses: 'Cancer treatment (Ra-223), luminous paint (historical)', state: 'Solid', block: 's' },
    89: { uses: 'Actinide research, neutron sources (Ac-Be)', state: 'Solid', block: 'f' },
    90: { uses: 'Nuclear reactors (Th-232), gas mantles, camera lenses', state: 'Solid', block: 'f' },
    91: { uses: 'Nuclear fuel research, historical incandescent filaments', state: 'Solid', block: 'f' },
    92: { uses: 'Nuclear power (U-235), nuclear weapons, glass coloring (uranium glass)', state: 'Solid', block: 'f' },
    93: { uses: 'Neutron detectors, nuclear weapon production', state: 'Solid', block: 'f' },
    94: { uses: 'Nuclear weapons (Pu-239), RTG power for space probes', state: 'Solid', block: 'f' },
    95: { uses: 'Smoke detectors (Am-241), research, nuclear reactor startup', state: 'Solid', block: 'f' },
    96: { uses: 'Alpha particle research, neutron sources', state: 'Solid', block: 'f' },
    97: { uses: 'Scientific research only', state: 'Solid', block: 'f' },
    98: { uses: 'Scientific research, portable neutron sources', state: 'Solid', block: 'f' },
    99: { uses: 'Scientific research only', state: 'Solid', block: 'f' },
    100: { uses: 'Scientific research only', state: 'Solid', block: 'f' },
    101: { uses: 'Scientific research only', state: 'Solid', block: 'f' },
    102: { uses: 'Scientific research only', state: 'Solid', block: 'f' },
    103: { uses: 'Scientific research only', state: 'Solid', block: 'f' },
    104: { uses: 'Scientific research only', state: 'Solid', block: 'd' },
    105: { uses: 'Scientific research only', state: 'Solid', block: 'd' },
    106: { uses: 'Scientific research only', state: 'Solid', block: 'd' },
    107: { uses: 'Scientific research only', state: 'Solid', block: 'd' },
    108: { uses: 'Scientific research only', state: 'Solid', block: 'd' },
    109: { uses: 'Scientific research only', state: 'Solid', block: 'd' },
    110: { uses: 'Scientific research only', state: 'Solid', block: 'd' },
    111: { uses: 'Scientific research only', state: 'Solid', block: 'd' },
    112: { uses: 'Scientific research only', state: 'Liquid', block: 'd' },
    113: { uses: 'Scientific research only', state: 'Solid', block: 'p' },
    114: { uses: 'Scientific research only', state: 'Solid', block: 'p' },
    115: { uses: 'Scientific research only', state: 'Solid', block: 'p' },
    116: { uses: 'Scientific research only', state: 'Solid', block: 'p' },
    117: { uses: 'Scientific research only', state: 'Solid', block: 'p' },
    118: { uses: 'Scientific research only', state: 'Solid', block: 'p' }
};

// ========== APP STATE ==========
let state = {
    currentUserId: null,
    profile: { name: '', class: '' },
    currentDifficulty: 'easy',
    score: 0,
    totalScore: 0,
    quizzesTaken: 0,
    streak: 0,
    lastQuizDate: null,
    topicScores: {},
    scoreHistory: [],
    badges: [],
    currentQuiz: null,
    currentQuestion: 0,
    selectedTopic: null,
    hintUsed: false,
    timerInterval: null,
    seconds: 0,
    organicCategory: 'substitution',
    organicQuestionIndex: 0,
    organicScore: 0,
    organicTotal: 0,
    answered: false,
    recentQuestions: [],
    recommendedTopicId: null,
    mistakes: []
};

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
    showSplashScreen();
});

function showSplashScreen() {
    const splashScreen = document.getElementById('splashScreen');
    
    // Hide all other screens initially
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('mainApp').classList.add('hidden');
    
    // Show splash screen for 3 seconds
    setTimeout(() => {
        splashScreen.classList.add('fade-out');
        
        setTimeout(() => {
            splashScreen.style.display = 'none';
            document.getElementById('loginScreen').style.display = 'flex';
            initLoginScreen();
            initNavigation();
            initPeriodicTable();
            initOrganicChemistry();
        }, 500);
    }, 3000);
}

// ========== LOGIN SYSTEM ==========
function initLoginScreen() {
    const users = DataLayer.getUsers();
    const currentUserId = DataLayer.getCurrentUserId();
    
    if (currentUserId) {
        const userData = DataLayer.getUserData(currentUserId);
        if (userData) {
            loginUser(currentUserId, userData);
            return;
        }
    }
    
    if (users.length > 0) {
        showExistingUsers(users);
    }
    
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('loginName').value.trim();
        const classNum = document.getElementById('loginClass').value;
        
        if (!name || !classNum) return;
        
        const existingUser = users.find(u => u.name.toLowerCase() === name.toLowerCase() && u.class === classNum);
        
        if (existingUser) {
            loginUser(existingUser.id, existingUser);
        } else {
            const newUser = {
                id: DataLayer.generateUserId(),
                name: name,
                class: classNum,
                createdAt: new Date().toISOString()
            };
            
            users.push(newUser);
            DataLayer.saveUsers(users);
            
            const userData = {
                profile: newUser,
                totalScore: 0,
                quizzesTaken: 0,
                streak: 0,
                lastQuizDate: null,
                topicScores: {},
                scoreHistory: [],
                badges: []
            };
            DataLayer.saveUserData(newUser.id, userData);
            
            loginUser(newUser.id, userData);
        }
    });
}

function showExistingUsers(users) {
    const section = document.getElementById('existingUsersSection');
    const list = document.getElementById('existingUsersList');
    
    list.innerHTML = users.map(user => `
        <div class="user-option" onclick="selectExistingUser('${user.id}')">
            <div class="user-option-avatar">${user.name.charAt(0).toUpperCase()}</div>
            <div class="user-option-info">
                <div class="user-option-name">${user.name}</div>
                <div class="user-option-class">Class ${user.class}</div>
            </div>
        </div>
    `).join('');
    
    section.classList.remove('hidden');
    document.getElementById('formTitle').textContent = 'Or Create New Profile';
}

function selectExistingUser(userId) {
    const userData = DataLayer.getUserData(userId);
    if (userData) {
        loginUser(userId, userData);
    }
}

function loginUser(userId, userData) {
    state.currentUserId = userId;
    DataLayer.setCurrentUserId(userId);
    
    state.profile = userData.profile;
    state.totalScore = userData.totalScore || 0;
    state.quizzesTaken = userData.quizzesTaken || 0;
    state.streak = userData.streak || 0;
    state.lastQuizDate = userData.lastQuizDate || null;
    state.topicScores = userData.topicScores || {};
    state.scoreHistory = userData.scoreHistory || [];
    state.badges = userData.badges || [];
    state.mistakes = userData.mistakes || [];
    
    updateDifficulty();
    updateUI();
    
    document.getElementById('loginScreen').classList.add('hidden');
    document.getElementById('mainApp').classList.remove('hidden');
    
    updateDashboard();
    updateBadges();
    loadTopics();
}

function saveUserData() {
    if (!state.currentUserId) return;
    
    const userData = {
        profile: state.profile,
        totalScore: state.totalScore,
        quizzesTaken: state.quizzesTaken,
        streak: state.streak,
        lastQuizDate: state.lastQuizDate,
        topicScores: state.topicScores,
        scoreHistory: state.scoreHistory,
        badges: state.badges,
        mistakes: state.mistakes
    };
    
    DataLayer.saveUserData(state.currentUserId, userData);
}

function updateUI() {
    const firstName = state.profile.name.split(' ')[0];
    
    document.getElementById('welcomeMessage').textContent = `Welcome back, ${firstName}!`;
    document.getElementById('welcomeSubtitle').textContent = `Class ${state.profile.class} Chemistry Learning`;
    
    document.getElementById('navAvatar').textContent = state.profile.name.charAt(0).toUpperCase();
    document.getElementById('navUserName').textContent = firstName;
    
    document.getElementById('profileAvatar').textContent = state.profile.name.charAt(0).toUpperCase();
    document.getElementById('userName').value = state.profile.name;
    document.getElementById('userClass').value = state.profile.class;
    
    document.getElementById('quizClassDisplay').textContent = `Class ${state.profile.class}`;
    
    document.getElementById('dashboardClass').textContent = `Class ${state.profile.class} Student`;
}

function switchUser() {
    DataLayer.setCurrentUserId(null);
    state.currentUserId = null;
    
    document.getElementById('mainApp').classList.add('hidden');
    document.getElementById('loginScreen').classList.remove('hidden');
    
    document.getElementById('loginName').value = '';
    document.getElementById('loginClass').value = '';
    
    initLoginScreen();
}

function createNewProfile() {
    DataLayer.setCurrentUserId(null);
    state.currentUserId = null;
    
    document.getElementById('mainApp').classList.add('hidden');
    document.getElementById('loginScreen').classList.remove('hidden');
    
    document.getElementById('loginName').value = '';
    document.getElementById('loginClass').value = '';
    document.getElementById('existingUsersSection').classList.add('hidden');
    document.getElementById('formTitle').textContent = 'Create Your Profile';
}

// ========== NAVIGATION ==========
function initNavigation() {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo(link.dataset.page);
        });
    });
    
    document.getElementById('menuToggle').addEventListener('click', () => {
        document.querySelector('.nav-links').classList.toggle('active');
    });
    
    document.getElementById('profileForm').addEventListener('submit', (e) => {
        e.preventDefault();
        state.profile.name = document.getElementById('userName').value;
        state.profile.class = document.getElementById('userClass').value;
        
        const users = DataLayer.getUsers();
        const userIndex = users.findIndex(u => u.id === state.currentUserId);
        if (userIndex !== -1) {
            users[userIndex].name = state.profile.name;
            users[userIndex].class = state.profile.class;
            DataLayer.saveUsers(users);
        }
        
        saveUserData();
        updateUI();
        loadTopics();
        alert('Profile saved successfully!');
    });
}

function navigateTo(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
    
    document.getElementById(page).classList.add('active');
    document.querySelector(`[data-page="${page}"]`).classList.add('active');
    document.querySelector('.nav-links').classList.remove('active');
    
    // Update dashboard when navigating to it
    if (page === 'dashboard') {
        updateDashboard();
    }
    if (page === 'mistakes') loadMistakes();
    if (page === 'leaderboard') loadLeaderboard();
    if (page === 'analysis') loadAnalysis();
}

// ========== QUIZ ==========
function loadTopics() {
    const classNum = state.profile.class;
    const grid = document.getElementById('topicsGrid');
    const topics = classTopics[classNum] || [];
    
    grid.innerHTML = topics.map(topic => `
        <div class="topic-card" onclick="selectTopic('${topic.id}', '${topic.name}', this)">
            <div class="topic-icon">${topic.icon}</div>
            <h4>${topic.name}</h4>
        </div>
    `).join('');
}

function selectTopic(topicId, topicName, element) {
    if (element) {
        document.querySelectorAll('.topic-card').forEach(c => c.classList.remove('selected'));
        element.classList.add('selected');
    }
    state.selectedTopic = { id: topicId, name: topicName };
    
    setTimeout(() => startQuiz(), 300);
}

function startQuiz() {
    const questions = quizQuestions[state.selectedTopic.id];
    if (!questions || questions.length === 0) {
        alert('No questions available for this topic yet!');
        return;
    }
    
    // Filter out recently shown questions (keep at least 5 questions)
    let availableQuestions = questions.filter((q, index) => 
        !state.recentQuestions.includes(`${state.selectedTopic.id}_${index}`)
    );
    
    // If we've filtered out too many, reset and use all questions
    if (availableQuestions.length < 5) {
        availableQuestions = [...questions];
        state.recentQuestions = [];
    }
    
    // Fisher-Yates shuffle for truly random results
    let shuffled = [...availableQuestions];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    if (state.currentDifficulty === 'hard') {
        shuffled = shuffled.filter(q => q.hint && q.hint.length > 20);
        // Re-shuffle after filtering
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
    }
    
    const numQuestions = Math.min(10, shuffled.length || 5);
    shuffled = shuffled.slice(0, numQuestions);
    
    // Track shown questions
    shuffled.forEach(q => {
        const qIndex = questions.indexOf(q);
        state.recentQuestions.push(`${state.selectedTopic.id}_${qIndex}`);
    });
    
    // Keep only last 20 questions in memory
    if (state.recentQuestions.length > 20) {
        state.recentQuestions = state.recentQuestions.slice(-20);
    }
    
    state.currentQuiz = {
        topic: state.selectedTopic.id,
        topicName: state.selectedTopic.name,
        questions: shuffled,
        answers: [],
        score: 0
    };
    state.currentQuestion = 0;
    state.hintUsed = false;
    state.seconds = 0;
    
    document.getElementById('topicSelection').classList.add('hidden');
    document.getElementById('quizArea').classList.remove('hidden');
    document.getElementById('quizResults').classList.add('hidden');
    
    document.getElementById('totalQuestions').textContent = shuffled.length;
    
    startTimer();
    showQuestion();
}

function startTimer() {
    clearInterval(state.timerInterval);
    state.timerInterval = setInterval(() => {
        state.seconds++;
        const mins = Math.floor(state.seconds / 60);
        const secs = state.seconds % 60;
        document.getElementById('timer').textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }, 1000);
}

function showQuestion() {
    const quiz = state.currentQuiz;
    const q = quiz.questions[state.currentQuestion];
    
    document.getElementById('questionNum').textContent = state.currentQuestion + 1;
    document.getElementById('currentScore').textContent = quiz.score;
    document.getElementById('questionText').textContent = q.q;
    
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = q.options.map((opt, i) => `
        <button class="option-btn" onclick="selectAnswer(${i})" data-index="${i}">${opt}</button>
    `).join('');
    
    document.getElementById('hintText').classList.add('hidden');
    document.getElementById('hintBtn').disabled = false;
    document.getElementById('nextBtn').disabled = true;
    document.getElementById('finishBtn').classList.add('hidden');
    document.getElementById('explanationBox').classList.add('hidden');
    state.hintUsed = false;
    state.answered = false;
}

function selectAnswer(index) {
    if (state.answered) return;
    state.answered = true;
    
    const quiz = state.currentQuiz;
    const q = quiz.questions[state.currentQuestion];
    const buttons = document.querySelectorAll('.option-btn');
    const isCorrect = index === q.correct;
    
    // Play sound
    playAnswerSound(isCorrect);
    
    // Animate question card
    const card = document.querySelector('.question-card');
    card.classList.add(isCorrect ? 'animate-correct' : 'animate-shake');
    setTimeout(() => card.classList.remove('animate-correct', 'animate-shake'), 500);
    
    buttons.forEach(btn => {
        btn.disabled = true;
        const btnIndex = parseInt(btn.dataset.index);
        if (btnIndex === q.correct) {
            btn.classList.add('correct');
        } else if (btnIndex === index && !isCorrect) {
            btn.classList.add('wrong');
        }
    });
    
    if (isCorrect) {
        quiz.score += state.hintUsed ? 5 : 10;
    } else {
        // Save to mistake book
        state.mistakes.push({
            question: q.q,
            options: q.options,
            correct: q.correct,
            userAnswer: index,
            topic: quiz.topicName,
            topicId: quiz.topic,
            hintUsed: state.hintUsed,
            explanation: q.explanation || '',
            date: new Date().toISOString(),
            reviewed: false
        });
    }
    
    quiz.answers.push({ question: state.currentQuestion, selected: index, correct: q.correct });
    
    document.getElementById('nextBtn').disabled = false;
    document.getElementById('hintBtn').disabled = true;
    
    // Show explanation if available
    if (q.explanation) {
        document.getElementById('explanationText').textContent = q.explanation;
        document.getElementById('explanationBox').classList.remove('hidden');
    }
    
    if (state.currentQuestion === quiz.questions.length - 1) {
        document.getElementById('nextBtn').classList.add('hidden');
        document.getElementById('finishBtn').classList.remove('hidden');
    }
}

function showHint() {
    if (state.hintUsed) return;
    state.hintUsed = true;
    
    const quiz = state.currentQuiz;
    const q = quiz.questions[state.currentQuestion];
    
    document.getElementById('hintText').textContent = '💡 ' + q.hint;
    document.getElementById('hintText').classList.remove('hidden');
    document.getElementById('hintBtn').disabled = true;
}

function nextQuestion() {
    state.currentQuestion++;
    showQuestion();
}

function finishQuiz() {
    clearInterval(state.timerInterval);
    
    const quiz = state.currentQuiz;
    const correct = quiz.answers.filter(a => a.selected === a.correct).length;
    const total = quiz.questions.length;
    const percentage = Math.round((correct / total) * 100);
    
    state.totalScore += quiz.score;
    state.quizzesTaken++;
    
    if (!state.topicScores[quiz.topic]) {
        state.topicScores[quiz.topic] = { correct: 0, total: 0, name: quiz.topicName };
    }
    state.topicScores[quiz.topic].correct += correct;
    state.topicScores[quiz.topic].total += total;
    
    state.scoreHistory.push({
        topic: quiz.topicName,
        score: quiz.score,
        percentage,
        correct,
        total,
        timeTaken: state.seconds,
        date: new Date().toISOString()
    });
    
    updateDifficulty();
    updateStreak();
    updateBadges();
    saveUserData();
    updateDashboard();
    
    document.getElementById('quizArea').classList.add('hidden');
    document.getElementById('quizResults').classList.remove('hidden');
    
    document.getElementById('finalScore').textContent = `${correct}/${total}`;
    document.getElementById('correctCount').textContent = correct;
    document.getElementById('incorrectCount').textContent = total - correct;
    
    const mins = Math.floor(state.seconds / 60);
    const secs = state.seconds % 60;
    document.getElementById('totalTime').textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
    
    if (percentage >= 80) {
        document.getElementById('resultMessage').textContent = 'Excellent work! You\'re mastering this topic!';
    } else if (percentage >= 60) {
        document.getElementById('resultMessage').textContent = 'Good job! Keep practicing to improve!';
    } else {
        document.getElementById('resultMessage').textContent = 'Keep learning! Review the topic and try again.';
    }
    
    showRecommendation();
}

function resetQuiz() {
    document.getElementById('topicSelection').classList.remove('hidden');
    document.getElementById('quizArea').classList.add('hidden');
    document.getElementById('quizResults').classList.add('hidden');
    document.getElementById('nextBtn').classList.remove('hidden');
    document.getElementById('recommendationBox').classList.add('hidden');
    loadTopics();
}

function showRecommendation() {
    const classNum = parseInt(state.profile.class);
    const topics = classTopics[classNum] || [];
    const box = document.getElementById('recommendationBox');
    
    // Find topics with lowest performance
    let weakestTopic = null;
    let lowestPercentage = 100;
    let untriedTopics = [];
    
    for (const topic of topics) {
        const scores = state.topicScores[topic.id];
        if (!scores || scores.total === 0) {
            untriedTopics.push(topic);
            continue;
        }
        const percentage = (scores.correct / scores.total) * 100;
        if (percentage < lowestPercentage) {
            lowestPercentage = percentage;
            weakestTopic = topic;
        }
    }
    
    let recommendation = '';
    let recommendedId = null;
    
    if (untriedTopics.length > 0) {
        // Suggest an untried topic
        const pick = untriedTopics[Math.floor(Math.random() * untriedTopics.length)];
        recommendation = `You haven't tried "${pick.name}" yet! Give it a go to build a well-rounded understanding.`;
        recommendedId = pick.id;
    } else if (weakestTopic && lowestPercentage < 70) {
        // Suggest weakest topic
        recommendation = `Your weakest area is "${weakestTopic.name}" (${Math.round(lowestPercentage)}%). Practicing this will boost your overall score the most.`;
        recommendedId = weakestTopic.id;
    } else {
        // All topics are strong, suggest random class topic
        const pick = topics[Math.floor(Math.random() * topics.length)];
        recommendation = `Great work across the board! Try "${pick.name}" to maintain your edge.`;
        recommendedId = pick.id;
    }
    
    state.recommendedTopicId = recommendedId;
    document.getElementById('recommendationText').textContent = recommendation;
    box.classList.remove('hidden');
}

function startRecommendedQuiz() {
    if (!state.recommendedTopicId) return;
    
    // Find topic name
    const classNum = parseInt(state.profile.class);
    const topics = classTopics[classNum] || [];
    const topic = topics.find(t => t.id === state.recommendedTopicId);
    if (topic) {
        resetQuiz();
        setTimeout(() => selectTopic(topic.id, topic.name, null), 100);
    }
}

function updateDifficulty() {
    const recentScores = state.scoreHistory.slice(-5);
    if (recentScores.length < 3) {
        state.currentDifficulty = 'easy';
    } else {
        const avgPercentage = recentScores.reduce((sum, s) => sum + s.percentage, 0) / recentScores.length;
        if (avgPercentage >= 80) {
            state.currentDifficulty = 'hard';
        } else if (avgPercentage >= 60) {
            state.currentDifficulty = 'medium';
        } else {
            state.currentDifficulty = 'easy';
        }
    }
    
    const diffBadge = document.getElementById('currentDifficulty');
    if (diffBadge) {
        diffBadge.textContent = state.currentDifficulty.charAt(0).toUpperCase() + state.currentDifficulty.slice(1);
        diffBadge.className = 'difficulty-badge ' + state.currentDifficulty;
    }
}

function updateStreak() {
    const today = new Date().toDateString();
    const lastDate = state.lastQuizDate ? new Date(state.lastQuizDate).toDateString() : null;
    
    if (lastDate === today) return;
    
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (lastDate === yesterday.toDateString()) {
        state.streak++;
    } else if (lastDate !== today) {
        state.streak = 1;
    }
    
    state.lastQuizDate = new Date().toISOString();
}

// ========== PERIODIC TABLE ==========
function initPeriodicTable() {
    const table = document.getElementById('periodicTable');
    if (!table) return;
    
    const categoryColors = {
        'alkali': '#ff6b6b',
        'alkaline': '#ffa94d',
        'transition': '#ffd43b',
        'post-transition': '#69db7c',
        'nonmetal': '#4dabf7',
        'metalloid': '#69db7c',
        'halogen': '#9775fa',
        'noble': '#f783ac',
        'lanthanide': '#868e96',
        'actinide': '#5c7cfa'
    };
    
    periodicElements.forEach(el => {
        const div = document.createElement('div');
        div.className = 'element';
        div.style.background = categoryColors[el.category] || '#868e96';
        div.style.gridRow = el.period;
        div.style.gridColumn = el.group;
        div.innerHTML = `
            <span class="atomic-num">${el.number}</span>
            <span class="symbol">${el.symbol}</span>
            <span class="name">${el.name}</span>
        `;
        div.onclick = () => showElementDetails(el);
        table.appendChild(div);
    });
}

function filterElements() {
    const search = document.getElementById('elementSearch').value.toLowerCase();
    document.querySelectorAll('.element').forEach(el => {
        const name = el.querySelector('.name').textContent.toLowerCase();
        const symbol = el.querySelector('.symbol').textContent.toLowerCase();
        el.style.display = (name.includes(search) || symbol.includes(search)) ? 'flex' : 'none';
    });
}

function showElementDetails(el) {
    const modal = document.getElementById('elementModal');
    const details = document.getElementById('elementDetails');
    const extra = elementUses[el.number] || { uses: 'Unknown', state: 'Unknown', block: 'Unknown' };
    
    details.innerHTML = `
        <div class="element-detail-header">
            <div class="element-detail-symbol" style="color: ${el.category === 'nonmetal' ? '#4dabf7' : el.category === 'noble' ? '#f783ac' : '#ffd43b'}">${el.symbol}</div>
            <div class="element-detail-name">${el.name}</div>
        </div>
        <div class="element-detail-props">
            <div class="prop-row"><span class="prop-label">Atomic Number</span><span>${el.number}</span></div>
            <div class="prop-row"><span class="prop-label">Atomic Mass</span><span>${el.mass}</span></div>
            <div class="prop-row"><span class="prop-label">Category</span><span>${el.category}</span></div>
            <div class="prop-row"><span class="prop-label">Period</span><span>${el.period}</span></div>
            <div class="prop-row"><span class="prop-label">Group</span><span>${el.group}</span></div>
            <div class="prop-row"><span class="prop-label">Configuration</span><span>${el.config}</span></div>
            <div class="prop-row"><span class="prop-label">Block</span><span>${extra.block}</span></div>
            <div class="prop-row"><span class="prop-label">State</span><span>${extra.state}</span></div>
        </div>
        <div class="element-uses-section">
            <h4>Uses & Applications</h4>
            <p class="element-uses-text">${extra.uses}</p>
        </div>
    `;
    
    modal.classList.remove('hidden');
}

function closeElementModal() {
    document.getElementById('elementModal').classList.add('hidden');
}

// ========== ORGANIC CHEMISTRY ==========
function initOrganicChemistry() {
    document.querySelectorAll('.organic-nav .btn-tab').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.organic-nav .btn-tab').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.organicCategory = btn.dataset.category;
            state.organicQuestionIndex = 0;
            state.organicScore = 0;
            state.organicTotal = 0;
            updateOrganicScore();
            startOrganicQuiz();
        });
    });
}

function startOrganicQuiz() {
    state.organicQuestionIndex = 0;
    state.organicScore = 0;
    state.organicTotal = 0;
    state.answered = false;
    
    document.getElementById('startOrganicBtn').classList.add('hidden');
    document.getElementById('organicQuizArea').classList.remove('hidden');
    
    updateOrganicScore();
    showOrganicQuestion();
}

function showOrganicQuestion() {
    const reactions = organicReactions[state.organicCategory];
    if (state.organicQuestionIndex >= reactions.length) {
        alert(`Category complete! Score: ${state.organicScore}/${state.organicTotal}`);
        document.getElementById('startOrganicBtn').classList.remove('hidden');
        document.getElementById('organicQuizArea').classList.add('hidden');
        return;
    }
    
    const q = reactions[state.organicQuestionIndex];
    state.answered = false;
    
    document.getElementById('reactionQuestion').textContent = q.reaction;
    document.getElementById('reactionVisual').textContent = '???';
    document.getElementById('reactionVisual').classList.add('hidden');
    
    const optionsContainer = document.getElementById('reactionOptions');
    optionsContainer.innerHTML = q.options.map((opt, i) => `
        <button class="option-btn" onclick="selectOrganicAnswer(${i})" data-index="${i}">${opt}</button>
    `).join('');
    
    document.getElementById('orgHintText').classList.add('hidden');
    document.getElementById('orgHintBtn').disabled = false;
    document.getElementById('orgNextBtn').disabled = true;
}

function selectOrganicAnswer(index) {
    if (state.answered) return;
    state.answered = true;
    state.organicTotal++;
    
    const reactions = organicReactions[state.organicCategory];
    const q = reactions[state.organicQuestionIndex];
    const buttons = document.querySelectorAll('#reactionOptions .option-btn');
    const isCorrect = index === q.correct;
    
    // Play sound
    playAnswerSound(isCorrect);
    
    // Animate question card
    const card = document.querySelector('#organicQuiz .question-card');
    if (card) {
        card.classList.add(isCorrect ? 'animate-correct' : 'animate-shake');
        setTimeout(() => card.classList.remove('animate-correct', 'animate-shake'), 500);
    }
    
    buttons.forEach(btn => {
        btn.disabled = true;
        const btnIndex = parseInt(btn.dataset.index);
        if (btnIndex === q.correct) {
            btn.classList.add('correct');
        } else if (btnIndex === index && !isCorrect) {
            btn.classList.add('wrong');
        }
    });
    
    // Reveal the reaction visual (answer) after user answers
    const visualEl = document.getElementById('reactionVisual');
    visualEl.textContent = q.visual;
    visualEl.classList.remove('hidden');
    
    if (isCorrect) {
        state.organicScore++;
    } else {
        // Save to mistake book
        state.mistakes.push({
            question: q.q,
            options: q.options,
            correct: q.correct,
            userAnswer: index,
            topic: 'Organic Chemistry',
            topicId: 'organic-' + state.organicCategory,
            hintUsed: document.getElementById('orgHintBtn').disabled,
            explanation: q.explanation || '',
            date: new Date().toISOString(),
            reviewed: false
        });
    }
    
    updateOrganicScore();
    document.getElementById('orgNextBtn').disabled = false;
    document.getElementById('orgHintBtn').disabled = true;
}

function showOrganicHint() {
    const reactions = organicReactions[state.organicCategory];
    const q = reactions[state.organicQuestionIndex];
    
    document.getElementById('orgHintText').textContent = '💡 ' + q.hint;
    document.getElementById('orgHintText').classList.remove('hidden');
    document.getElementById('orgHintBtn').disabled = true;
}

function nextOrganicQuestion() {
    state.organicQuestionIndex++;
    showOrganicQuestion();
}

function updateOrganicScore() {
    document.getElementById('organicScore').textContent = state.organicScore;
    document.getElementById('organicTotal').textContent = state.organicTotal;
}

// ========== DASHBOARD ==========
function updateDashboard() {
    document.getElementById('totalScore').textContent = state.totalScore;
    document.getElementById('quizzesTaken').textContent = state.quizzesTaken;
    document.getElementById('dayStreak').textContent = state.streak;
    
    const avgScore = state.scoreHistory.length > 0
        ? Math.round(state.scoreHistory.reduce((sum, s) => sum + s.percentage, 0) / state.scoreHistory.length)
        : 0;
    document.getElementById('avgScore').textContent = avgScore + '%';
    
    updateTopicPerformance();
    updateStrengthsWeaknesses();
    drawScoreChart();
}

function updateTopicPerformance() {
    const container = document.getElementById('topicPerformance');
    const topics = Object.entries(state.topicScores);
    
    if (topics.length === 0) {
        container.innerHTML = '<p style="color: var(--text-secondary)">No quiz data yet. Start a quiz to see your performance!</p>';
        return;
    }
    
    container.innerHTML = topics.map(([id, data]) => {
        const percentage = Math.round((data.correct / data.total) * 100);
        const color = percentage >= 80 ? '#10b981' : percentage >= 60 ? '#f59e0b' : '#ef4444';
        return `
            <div class="performance-item">
                <span>${data.name}</span>
                <div class="performance-bar">
                    <div class="performance-fill" style="width: ${percentage}%; background: ${color}"></div>
                </div>
                <span>${percentage}%</span>
            </div>
        `;
    }).join('');
}

function updateStrengthsWeaknesses() {
    const strengthsContainer = document.getElementById('strengths');
    const weakContainer = document.getElementById('weakTopics');
    
    const topics = Object.entries(state.topicScores);
    const strengths = topics.filter(([, data]) => (data.correct / data.total) >= 0.7);
    const weak = topics.filter(([, data]) => (data.correct / data.total) < 0.5);
    
    if (strengths.length === 0) {
        strengthsContainer.innerHTML = '<p style="color: var(--text-secondary)">Complete quizzes to identify your strengths!</p>';
    } else {
        strengthsContainer.innerHTML = strengths.map(([, data]) => `
            <div class="strength-item">${data.name} (${Math.round((data.correct / data.total) * 100)}%)</div>
        `).join('');
    }
    
    if (weak.length === 0) {
        weakContainer.innerHTML = '<p style="color: var(--text-secondary)">No weak areas identified yet!</p>';
    } else {
        weakContainer.innerHTML = weak.map(([, data]) => `
            <div class="weak-item">${data.name} (${Math.round((data.correct / data.total) * 100)}%)</div>
        `).join('');
    }
}

function drawScoreChart() {
    const canvas = document.getElementById('scoreChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.parentElement.clientWidth - 48;
    canvas.height = 200;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (state.scoreHistory.length === 0) {
        ctx.fillStyle = '#94a3b8';
        ctx.font = '14px Segoe UI';
        ctx.textAlign = 'center';
        ctx.fillText('No score history yet', canvas.width / 2, canvas.height / 2);
        return;
    }
    
    const data = state.scoreHistory.slice(-10);
    const maxScore = Math.max(...data.map(d => d.score), 10);
    const padding = 40;
    const graphWidth = canvas.width - padding * 2;
    const graphHeight = canvas.height - padding * 2;
    const barWidth = graphWidth / data.length - 5;
    
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 1;
    
    for (let i = 0; i <= 4; i++) {
        const y = padding + (graphHeight / 4) * i;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(canvas.width - padding, y);
        ctx.stroke();
    }
    
    data.forEach((d, i) => {
        const x = padding + i * (barWidth + 5);
        const barHeight = (d.score / maxScore) * graphHeight;
        const y = padding + graphHeight - barHeight;
        
        const gradient = ctx.createLinearGradient(x, y, x, padding + graphHeight);
        gradient.addColorStop(0, '#667eea');
        gradient.addColorStop(1, '#764ba2');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x, y, barWidth, barHeight);
        
        ctx.fillStyle = '#94a3b8';
        ctx.font = '10px Segoe UI';
        ctx.textAlign = 'center';
        ctx.fillText(d.topic.substring(0, 8), x + barWidth / 2, canvas.height - 10);
    });
}

// ========== BADGES ==========
function updateBadges() {
    const badges = document.querySelectorAll('.badge');
    
    if (state.quizzesTaken >= 1) {
        document.querySelector('[data-badge="first-quiz"]')?.classList.add('earned');
        if (!state.badges.includes('first-quiz')) state.badges.push('first-quiz');
    }
    
    if (state.streak >= 3) {
        document.querySelector('[data-badge="streak-3"]')?.classList.add('earned');
        if (!state.badges.includes('streak-3')) state.badges.push('streak-3');
    }
    
    if (state.streak >= 7) {
        document.querySelector('[data-badge="streak-7"]')?.classList.add('earned');
        if (!state.badges.includes('streak-7')) state.badges.push('streak-7');
    }
    
    if (state.scoreHistory.some(s => s.percentage === 100)) {
        document.querySelector('[data-badge="perfect-score"]')?.classList.add('earned');
        if (!state.badges.includes('perfect-score')) state.badges.push('perfect-score');
    }
    
    if (state.topicScores['elements'] && state.topicScores['elements'].correct / state.topicScores['elements'].total >= 0.8) {
        document.querySelector('[data-badge="elements-master"]')?.classList.add('earned');
        if (!state.badges.includes('elements-master')) state.badges.push('elements-master');
    }
    
    const organicTopics = ['organic-hydrocarbons', 'alkyl-halides', 'alcohols', 'aldehydes', 'amines'];
    const organicDone = organicTopics.filter(t => state.topicScores[t] && state.topicScores[t].total > 0);
    if (organicDone.length >= 3) {
        document.querySelector('[data-badge="organic-pro"]')?.classList.add('earned');
        if (!state.badges.includes('organic-pro')) state.badges.push('organic-pro');
    }
    
    if (state.totalScore >= 1000) {
        document.querySelector('[data-badge="score-1000"]')?.classList.add('earned');
        if (!state.badges.includes('score-1000')) state.badges.push('score-1000');
    }
    
    const classTopicsDone = Object.keys(state.topicScores).length;
    if (classTopicsDone >= 5) {
        document.querySelector('[data-badge="class-master"]')?.classList.add('earned');
        if (!state.badges.includes('class-master')) state.badges.push('class-master');
    }
    
    badges.forEach(badge => {
        const badgeId = badge.dataset.badge;
        if (state.badges.includes(badgeId)) {
            badge.classList.add('earned');
            badge.classList.remove('locked');
        }
    });
    
    saveUserData();
}

// ========== SOUND EFFECTS (Web Audio API) ==========
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;

function getAudioCtx() {
    if (!audioCtx) audioCtx = new AudioCtx();
    return audioCtx;
}

function playAnswerSound(isCorrect) {
    try {
        const ctx = getAudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        gain.gain.value = 0.3;
        if (isCorrect) {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(523, ctx.currentTime);
            osc.frequency.setValueAtTime(659, ctx.currentTime + 0.1);
            osc.frequency.setValueAtTime(784, ctx.currentTime + 0.2);
        } else {
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(200, ctx.currentTime);
            osc.frequency.setValueAtTime(150, ctx.currentTime + 0.15);
        }
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.4);
    } catch (e) {}
}

function playConfettiSound() {
    try {
        const ctx = getAudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        gain.gain.value = 0.25;
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523, ctx.currentTime);
        osc.frequency.setValueAtTime(659, ctx.currentTime + 0.1);
        osc.frequency.setValueAtTime(784, ctx.currentTime + 0.2);
        osc.frequency.setValueAtTime(1047, ctx.currentTime + 0.3);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.5);
    } catch (e) {}
}

// ========== CONFETTI ==========
function showConfetti() {
    playConfettiSound();
    const container = document.getElementById('confettiContainer');
    if (!container) return;
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd', '#ff9ff3'];
    for (let i = 0; i < 40; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = Math.random() * 8 + 4 + 'px';
        confetti.style.height = Math.random() * 8 + 4 + 'px';
        confetti.style.animationDelay = Math.random() * 1.5 + 's';
        container.appendChild(confetti);
        setTimeout(() => confetti.remove(), 4000);
    }
}

// ========== ENHANCED FINISH QUIZ (with confetti) ==========
const _originalFinishQuiz = finishQuiz;
finishQuiz = function() {
    _originalFinishQuiz.call(this);
    const pct = state.currentQuiz ? Math.round((state.currentQuiz.score / (state.currentQuiz.questions.length * 10)) * 100) : 0;
    if (pct >= 70) showConfetti();
};

// ========== MISTAKE BOOK ==========
function loadMistakes() {
    const grid = document.getElementById('mistakesList');
    const topicFilter = document.getElementById('mistakeTopicFilter');
    const statTotal = document.getElementById('totalMistakes');
    const statReviewed = document.getElementById('mistakesReviewed');
    const statPending = document.getElementById('mistakesRemaining');
    const mistakes = state.mistakes || [];
    const filterVal = topicFilter ? topicFilter.value : 'all';

    const uniqueTopics = [...new Set(mistakes.map(m => m.topic))];
    if (topicFilter && topicFilter.options.length <= 1) {
        uniqueTopics.forEach(t => {
            const opt = document.createElement('option');
            opt.value = t;
            opt.textContent = t;
            topicFilter.appendChild(opt);
        });
    }

    const filtered = filterVal === 'all' ? mistakes : mistakes.filter(m => m.topic === filterVal);
    const reviewed = mistakes.filter(m => m.reviewed).length;

    if (statTotal) statTotal.textContent = mistakes.length;
    if (statReviewed) statReviewed.textContent = reviewed;
    if (statPending) statPending.textContent = mistakes.length - reviewed;

    if (!grid) return;
    if (filtered.length === 0) {
        grid.innerHTML = '<div class="empty-state"><div class="empty-icon">📝</div><p>No mistakes recorded yet. Take a quiz to start learning!</p></div>';
        return;
    }

    grid.innerHTML = filtered.map((m, i) => `
        <div class="mistake-card ${m.reviewed ? 'reviewed' : ''}" data-index="${mistakes.indexOf(m)}">
            <div class="mistake-header">
                <span class="mistake-topic">${m.topic}</span>
                <span class="mistake-date">${new Date(m.date).toLocaleDateString()}</span>
            </div>
            <div class="mistake-question">${m.question}</div>
            <div class="mistake-options">${m.options.map((o, oi) => `
                <div class="mistake-option ${oi === m.correct ? 'correct-answer' : ''} ${oi === m.userAnswer && oi !== m.correct ? 'wrong-answer' : ''}">${String.fromCharCode(65 + oi)}) ${o}</div>
            `).join('')}</div>
            ${m.explanation ? `<div class="mistake-explanation">${m.explanation}</div>` : ''}
            <div class="mistake-actions">
                <button class="btn-mark-reviewed" onclick="markReviewed(${mistakes.indexOf(m)})">${m.reviewed ? '✓ Reviewed' : 'Mark Reviewed'}</button>
                <button class="btn-remove-mistake" onclick="removeMistake(${mistakes.indexOf(m)})">Remove</button>
            </div>
        </div>
    `).join('');
}

function markReviewed(index) {
    if (state.mistakes[index]) {
        state.mistakes[index].reviewed = !state.mistakes[index].reviewed;
        saveUserData();
        loadMistakes();
    }
}

function removeMistake(index) {
    state.mistakes.splice(index, 1);
    saveUserData();
    loadMistakes();
}

function filterMistakes() {
    loadMistakes();
}

function retryMistakes() {
    const wrong = state.mistakes.filter(m => !m.reviewed);
    if (wrong.length === 0) {
        alert('No unreviewed mistakes to retry!');
        return;
    }
    // Build a quiz from wrong questions
    const questions = wrong.map(m => ({
        q: m.question,
        options: m.options,
        correct: m.correct,
        hint: m.hintUsed ? 'Think carefully!' : '',
        explanation: m.explanation
    }));
    // Shuffle and take up to 10
    const shuffled = questions.sort(() => Math.random() - 0.5).slice(0, 10);
    state.currentQuiz = {
        topic: 'mistakes-retry',
        topicName: 'Mistake Retry',
        questions: shuffled,
        score: 0,
        answers: [],
        startTime: Date.now()
    };
    state.currentQuestion = 0;
    state.score = 0;
    state.hintUsed = false;
    state.answered = false;
    navigateTo('quiz');
    showQuestion();
}

function clearMistakes() {
    if (confirm('Are you sure you want to clear all mistakes?')) {
        state.mistakes = [];
        saveUserData();
        loadMistakes();
    }
}

// ========== LEADERBOARD ==========
function loadLeaderboard() {
    const list = document.getElementById('leaderboardList');
    if (!list) return;
    const allUsers = DataLayer.getAllUsers();
    const entries = Object.entries(allUsers).map(([id, u]) => ({
        id,
        name: u.profile?.name || 'Anonymous',
        totalScore: u.totalScore || 0,
        quizzes: u.quizzesTaken || 0,
        streak: u.streak || 0,
        accuracy: u.scoreHistory?.length > 0
            ? Math.round(u.scoreHistory.reduce((s, h) => s + (h.score / (h.total * 10)) * 100, 0) / u.scoreHistory.length)
            : 0
    }));

    const activeTab = document.querySelector('.leaderboard-tabs .btn-tab.active');
    const sortBy = activeTab ? activeTab.dataset.lb : 'total';

    entries.sort((a, b) => {
        if (sortBy === 'accuracy') return b.accuracy - a.accuracy;
        if (sortBy === 'streak') return b.streak - a.streak;
        if (sortBy === 'quizzes') return b.quizzes - a.quizzes;
        return b.totalScore - a.totalScore;
    });

    if (entries.length === 0) {
        list.innerHTML = '<div class="empty-state"><div class="empty-icon">🏆</div><p>No users yet. Be the first!</p></div>';
        return;
    }

    const medals = ['🥇', '🥈', '🥉'];
    list.innerHTML = entries.map((e, i) => `
        <div class="lb-entry ${e.id === state.currentUserId ? 'current-user' : ''}">
            <div class="lb-rank ${i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : ''}">${medals[i] || (i + 1)}</div>
            <div class="lb-info">
                <div class="lb-name">${e.name}${e.id === state.currentUserId ? ' (You)' : ''}</div>
                <div class="lb-class">Score: ${e.totalScore} | Accuracy: ${e.accuracy}% | Streak: ${e.streak} | Quizzes: ${e.quizzes}</div>
            </div>
            <div class="lb-value">${sortBy === 'accuracy' ? e.accuracy + '%' : sortBy === 'streak' ? e.streak : sortBy === 'quizzes' ? e.quizzes : e.totalScore}</div>
        </div>
    `).join('');
}

function switchLeaderboard(sortBy) {
    document.querySelectorAll('.leaderboard-tabs .btn-tab').forEach(t => t.classList.remove('active'));
    document.querySelector(`[data-lb="${sortBy}"]`)?.classList.add('active');
    loadLeaderboard();
}

// ========== PERFORMANCE ANALYSIS ==========
function loadAnalysis() {
    drawAccuracyChart();
    drawTopicRadar();
    drawTimeChart();
    drawDifficultyChart();
    drawAnalysisSummary();
}

function drawAccuracyChart() {
    const canvas = document.getElementById('accuracyChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.width = canvas.parentElement.clientWidth;
    const H = canvas.height = 220;
    ctx.clearRect(0, 0, W, H);

    const history = state.scoreHistory || [];
    if (history.length < 2) {
        ctx.fillStyle = '#94a3b8';
        ctx.font = '14px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Complete at least 2 quizzes to see trends', W / 2, H / 2);
        return;
    }

    const padding = { top: 20, right: 20, bottom: 40, left: 50 };
    const chartW = W - padding.left - padding.right;
    const chartH = H - padding.top - padding.bottom;
    const data = history.slice(-10).map(h => Math.round((h.score / (h.total * 10)) * 100));
    const maxVal = 100;

    // Grid lines
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
        const y = padding.top + chartH - (i / 4) * chartH;
        ctx.beginPath();
        ctx.moveTo(padding.left, y);
        ctx.lineTo(W - padding.right, y);
        ctx.stroke();
        ctx.fillStyle = '#94a3b8';
        ctx.font = '11px sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText((i * 25) + '%', padding.left - 8, y + 4);
    }

    // Line
    ctx.beginPath();
    ctx.strokeStyle = '#8b5cf6';
    ctx.lineWidth = 2.5;
    ctx.lineJoin = 'round';
    data.forEach((v, i) => {
        const x = padding.left + (i / (data.length - 1)) * chartW;
        const y = padding.top + chartH - (v / maxVal) * chartH;
        if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Dots
    data.forEach((v, i) => {
        const x = padding.left + (i / (data.length - 1)) * chartW;
        const y = padding.top + chartH - (v / maxVal) * chartH;
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#8b5cf6';
        ctx.fill();
        ctx.fillStyle = '#e2e8f0';
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(v + '%', x, y - 10);
    });

    // X labels
    ctx.fillStyle = '#94a3b8';
    ctx.font = '10px sans-serif';
    ctx.textAlign = 'center';
    data.forEach((_, i) => {
        const x = padding.left + (i / (data.length - 1)) * chartW;
        ctx.fillText('Q' + (history.length - data.length + i + 1), x, H - padding.bottom + 18);
    });
}

function drawTopicRadar() {
    const canvas = document.getElementById('topicRadarChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.width = canvas.parentElement.clientWidth;
    const H = canvas.height = 280;
    ctx.clearRect(0, 0, W, H);

    const scores = state.topicScores || {};
    const topics = Object.keys(scores).filter(t => scores[t].total > 0);
    if (topics.length < 3) {
        ctx.fillStyle = '#94a3b8';
        ctx.font = '14px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Attempt at least 3 topics for mastery view', W / 2, H / 2);
        return;
    }

    const cx = W / 2, cy = H / 2 + 10, R = Math.min(W, H) / 2 - 40;
    const n = topics.length;
    const angleStep = (Math.PI * 2) / n;

    // Rings
    for (let ring = 1; ring <= 4; ring++) {
        const r = (ring / 4) * R;
        ctx.beginPath();
        for (let i = 0; i <= n; i++) {
            const a = i * angleStep - Math.PI / 2;
            const x = cx + r * Math.cos(a);
            const y = cy + r * Math.sin(a);
            i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 1;
        ctx.stroke();
    }

    // Axes
    for (let i = 0; i < n; i++) {
        const a = i * angleStep - Math.PI / 2;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + R * Math.cos(a), cy + R * Math.sin(a));
        ctx.strokeStyle = '#334155';
        ctx.stroke();
    }

    // Data polygon
    ctx.beginPath();
    topics.forEach((t, i) => {
        const v = Math.round((scores[t].correct / scores[t].total) * 100);
        const r = (v / 100) * R;
        const a = i * angleStep - Math.PI / 2;
        const x = cx + r * Math.cos(a);
        const y = cy + r * Math.sin(a);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fillStyle = 'rgba(139, 92, 246, 0.25)';
    ctx.fill();
    ctx.strokeStyle = '#8b5cf6';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Dots and labels
    topics.forEach((t, i) => {
        const v = Math.round((scores[t].correct / scores[t].total) * 100);
        const r = (v / 100) * R;
        const a = i * angleStep - Math.PI / 2;
        const x = cx + r * Math.cos(a);
        const y = cy + r * Math.sin(a);
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#8b5cf6';
        ctx.fill();

        const lx = cx + (R + 22) * Math.cos(a);
        const ly = cy + (R + 22) * Math.sin(a);
        ctx.fillStyle = '#e2e8f0';
        ctx.font = '11px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const short = t.length > 12 ? t.substring(0, 10) + '..' : t;
        ctx.fillText(short, lx, ly);
    });
}

function drawTimeChart() {
    const canvas = document.getElementById('timeChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.width = canvas.parentElement.clientWidth;
    const H = canvas.height = 220;
    ctx.clearRect(0, 0, W, H);

    const history = state.scoreHistory || [];
    if (history.length < 2) {
        ctx.fillStyle = '#94a3b8';
        ctx.font = '14px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Complete at least 2 quizzes to see timing data', W / 2, H / 2);
        return;
    }

    const padding = { top: 20, right: 20, bottom: 40, left: 50 };
    const chartW = W - padding.left - padding.right;
    const chartH = H - padding.top - padding.bottom;
    const data = history.slice(-10).map(h => h.total > 0 ? Math.round(h.time / h.total) : 0);
    const maxVal = Math.max(...data, 30);

    // Grid
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
        const y = padding.top + chartH - (i / 4) * chartH;
        ctx.beginPath();
        ctx.moveTo(padding.left, y);
        ctx.lineTo(W - padding.right, y);
        ctx.stroke();
        ctx.fillStyle = '#94a3b8';
        ctx.font = '11px sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText(Math.round((i / 4) * maxVal) + 's', padding.left - 8, y + 4);
    }

    // Bars
    const barW = (chartW / data.length) * 0.6;
    data.forEach((v, i) => {
        const x = padding.left + (i / data.length) * chartW + (chartW / data.length - barW) / 2;
        const h = (v / maxVal) * chartH;
        const y = padding.top + chartH - h;
        ctx.fillStyle = '#06b6d4';
        ctx.fillRect(x, y, barW, h);
        ctx.fillStyle = '#e2e8f0';
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(v + 's', x + barW / 2, y - 8);
    });

    // X labels
    ctx.fillStyle = '#94a3b8';
    ctx.font = '10px sans-serif';
    data.forEach((_, i) => {
        const x = padding.left + (i + 0.5) / data.length * chartW;
        ctx.fillText('Q' + (history.length - data.length + i + 1), x, H - padding.bottom + 18);
    });
}

function drawDifficultyChart() {
    const canvas = document.getElementById('difficultyChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.width = canvas.parentElement.clientWidth;
    const H = canvas.height = 220;
    ctx.clearRect(0, 0, W, H);

    const scores = state.topicScores || {};
    let easy = 0, medium = 0, hard = 0;
    Object.values(scores).forEach(s => {
        if (s.difficulty === 'easy') easy += s.total;
        else if (s.difficulty === 'medium') medium += s.total;
        else hard += s.total;
    });

    const total = easy + medium + hard;
    if (total === 0) {
        ctx.fillStyle = '#94a3b8';
        ctx.font = '14px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('No quiz data yet', W / 2, H / 2);
        return;
    }

    const cx = W / 2, cy = H / 2 + 5, R = Math.min(W, H) / 2 - 50;
    const slices = [
        { label: 'Easy', value: easy, color: '#22c55e' },
        { label: 'Medium', value: medium, color: '#f59e0b' },
        { label: 'Hard', value: hard, color: '#ef4444' }
    ].filter(s => s.value > 0);

    let startAngle = -Math.PI / 2;
    slices.forEach(s => {
        const sliceAngle = (s.value / total) * Math.PI * 2;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, R, startAngle, startAngle + sliceAngle);
        ctx.closePath();
        ctx.fillStyle = s.color;
        ctx.fill();
        ctx.strokeStyle = '#0f172a';
        ctx.lineWidth = 2;
        ctx.stroke();

        const midAngle = startAngle + sliceAngle / 2;
        const lx = cx + (R * 0.65) * Math.cos(midAngle);
        const ly = cy + (R * 0.65) * Math.sin(midAngle);
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 13px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        if (s.value > 0) ctx.fillText(Math.round((s.value / total) * 100) + '%', lx, ly);

        startAngle += sliceAngle;
    });

    // Legend
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    slices.forEach((s, i) => {
        const lx = 20;
        const ly = H - 20 - (slices.length - 1 - i) * 22;
        ctx.fillStyle = s.color;
        ctx.fillRect(lx, ly - 7, 14, 14);
        ctx.fillStyle = '#e2e8f0';
        ctx.font = '12px sans-serif';
        ctx.fillText(`${s.label}: ${s.value} questions`, lx + 20, ly);
    });
}

function drawAnalysisSummary() {
    const el = document.getElementById('analysisSummary');
    if (!el) return;
    const scores = state.topicScores || {};
    const history = state.scoreHistory || [];
    const totalQ = Object.values(scores).reduce((s, t) => s + t.total, 0);
    const totalCorrect = Object.values(scores).reduce((s, t) => s + t.correct, 0);
    const avgAccuracy = totalQ > 0 ? Math.round((totalCorrect / totalQ) * 100) : 0;
    const bestStreak = state.streak;
    const avgTime = history.length > 0 ? Math.round(history.reduce((s, h) => s + (h.time / h.total), 0) / history.length) : 0;
    const mistakesCount = (state.mistakes || []).length;
    const reviewedCount = (state.mistakes || []).filter(m => m.reviewed).length;
    const weakTopics = Object.entries(scores)
        .filter(([_, s]) => s.total > 0 && (s.correct / s.total) < 0.5)
        .sort((a, b) => (a[1].correct / a[1].total) - (b[1].correct / b[1].total))
        .slice(0, 3)
        .map(([t]) => t);

    el.innerHTML = `
        <div class="summary-grid">
            <div class="summary-item"><div class="big-number">${state.totalScore}</div><div class="label">Total Score</div></div>
            <div class="summary-item"><div class="big-number">${avgAccuracy}%</div><div class="label">Accuracy</div></div>
            <div class="summary-item"><div class="big-number">${bestStreak}</div><div class="label">Best Streak</div></div>
            <div class="summary-item"><div class="big-number">${avgTime}s</div><div class="label">Avg Time/Q</div></div>
            <div class="summary-item"><div class="big-number">${state.quizzesTaken}</div><div class="label">Quizzes Done</div></div>
            <div class="summary-item"><div class="big-number">${Object.keys(scores).filter(t => scores[t].total > 0).length}</div><div class="label">Topics Covered</div></div>
            <div class="summary-item"><div class="big-number">${mistakesCount}</div><div class="label">Mistakes Saved</div></div>
            <div class="summary-item"><div class="big-number">${reviewedCount}</div><div class="label">Reviewed</div></div>
        </div>
        ${weakTopics.length > 0 ? `
        <div class="weak-topics">
            <h4>Weak Areas to Focus On:</h4>
            <div class="weak-list">${weakTopics.map(t => `<span class="weak-tag">${t}</span>`).join('')}</div>
        </div>` : ''}
    `;
}
document.getElementById('elementModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'elementModal') closeElementModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeElementModal();
});

window.addEventListener('resize', () => {
    drawScoreChart();
});
