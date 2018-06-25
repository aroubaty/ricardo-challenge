export const nodes = [
    { id: 1, label: 'A-1' },
    { id: 2, label: 'A-2' },
    { id: 3, label: 'A/B-3' },
    { id: 4, label: 'A/C-4' },
    { id: 5, label: 'A-5' },
    { id: 6, label: 'A-6' },
    { id: 11, label: 'B-1' },
    { id: 12, label: 'B-2' },
    { id: 13, label: 'B/C-3' },
    { id: 14, label: 'B-4' },
    { id: 21, label: 'C-1' },
    { id: 22, label: 'C-2' },
    { id: 23, label: 'C-3' },
    { id: 24, label: 'C-4' },
    { id: 25, label: 'C-5' },
    { id: 26, label: 'C-6' }
];

export const edges = [
    { from: 1, to: 2, rail: 1 },
    { from: 2, to: 3, rail: 1 },
    { from: 3, to: 4, rail: 1 },
    { from: 4, to: 5, rail: 1 },
    { from: 5, to: 6, rail: 1 },
    { from: 11, to: 12, rail: 2 },
    { from: 12, to: 3, rail: 2 },
    { from: 3, to: 13, rail: 2 },
    { from: 13, to: 14, rail: 2 },
    { from: 21, to: 22, rail: 3 },
    { from: 22, to: 13, rail: 3 },
    { from: 13, to: 23, rail: 3 },
    { from: 23, to: 4, rail: 3 },
    { from: 4, to: 24, rail: 3 },
    { from: 24, to: 25, rail: 3 },
    { from: 25, to: 26, rail: 3 },
];

export const initialTrains = [
    { name: 'A', color: '#00FF12', direction: 1, node: 1, passengers: 0, rail: 1 },
    { name: 'B', color: '#FF7900', direction: 1, node: 11, passengers: 0, rail: 2 },
    { name: 'C', color: '#4214CC', direction: 1, node: 21, passengers: 0, rail: 3 },
];
