import { edges } from './config';

export const UPDATE_TRAINS = 'UPDATE_TRAINS';

export const updateTrains = (trains, step) => ({
    type: UPDATE_TRAINS,
    trains,
    step
});

export function changeStep() {
    return (dispatch, getState) => {
        const state = getState();

        // find next node
        const updatedTrains = state.trains.map((train) => {
            let edgeToTake;
            let nextNodeId;
            let direction = train.direction;
            const selectedEdges = edges.filter(e => e.rail === train.rail);

            if (train.direction === 1) {
                edgeToTake = selectedEdges.filter(e => e.from === train.node)[0];
                
                if (edgeToTake) {
                    nextNodeId = edgeToTake.to;
                } else {
                    // we have reach the end of the rail
                    edgeToTake = selectedEdges.filter(e => e.to === train.node)[0];
                    nextNodeId = edgeToTake.from;
                    direction = -1;
                }
            } else {
                edgeToTake = selectedEdges.filter(e => e.to === train.node)[0];

                if (edgeToTake) {
                    nextNodeId = edgeToTake.from;
                } else {
                    // we have reach the end of the rail
                    edgeToTake = selectedEdges.filter(e => e.from === train.node)[0];
                    nextNodeId = edgeToTake.to;
                    direction = 1;
                } 
            }

            return {
                ...train,
                passengers: train.passengers + 1,
                nextNodeId,
                direction
            }
        });

        // intersection detector
        const trainsOnSameNode = {};
        updatedTrains.forEach((train) => {
            const trainsOnThisNode = updatedTrains.filter(t => t.nextNodeId === train.nextNodeId);

            if (trainsOnThisNode.length > 1) {
                trainsOnSameNode[train.nextNodeId] = trainsOnThisNode;
            }
        });

        // validate move
        const finalTrains = updatedTrains.map((train) => {
            // detect if conflit
            if (trainsOnSameNode[train.nextNodeId]) {
                const maxPassengers = trainsOnSameNode[train.nextNodeId].reduce((acc, t) => Math.max(acc, t.passengers), 0);

                const trainAllowToMove = updatedTrains
                    .filter(t => t.passengers === maxPassengers && t.nextNodeId === train.nextNodeId)
                    .reduce((acc, train) => {
                        // in case of passengers equality I choose the first rail ID (A > B > C)
                        if (train.rail < acc.rail) return train;
                        return acc;
                    });

                if (trainAllowToMove.rail !== train.rail) {
                    // we don't have the max passengers validate move
                    return {
                        ...train,
                        passengers: train.passengers - 1,
                        nextNodeId: train.node
                    };
                }
            }

            return {
                ...train,
                node: train.nextNodeId
            };
        });

        dispatch(updateTrains(finalTrains, state.step + 1));
    };
}

