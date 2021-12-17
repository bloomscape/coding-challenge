import { createSlice } from '@reduxjs/toolkit';

export const vendingSlice = createSlice({
    name: 'vending',
    initialState: {
        currentState: 'START',
        sodas : [{
                type: 'coca',
                total: 7,
                cost: 3.5,
                code: '001'
            }, {
                type: 'burn',
                total: 10,
                cost: 3.5,
                code: '002'
            }, {
                type: 'cocaLight',
                total: 11,
                cost: 3.5,
                code: '003'
            }, {
                type: 'ciel',
                total: 5,
                cost: 2,
                code: '004'
            }, {
                type: 'cielM',
                total: 2,
                cost: 2.5,
                code: '005'
            }, {
                type: 'delaware',
                total: 1,
                cost: 4,
                code: '011'
            }, {
                type: 'fanta',
                total: 11,
                cost: 3,
                code: '012'
            }, {
                type: 'fresca',
                total: 7,
                cost: 3,
                code: '013'
            }, {
                type: 'monster',
                total: 10,
                cost: 5,
                code: '014'
            }, {
                type: 'mundet',
                total: 12,
                cost: 3.5,
                code: '015'
            }, {
                type: 'sprite',
                total: 6,
                cost: 3,
                code: '021'
            }],
        cash: 0,
        change: 0,
        code: ''
    },
    reducers: {
        addCash: (state, action) => {
            state.cash += action.payload
            state.currentState = 'CASH_ADDED'
        },
        removeCash: (state) => {
            state.cash = 0;
        },
        productSelected: (state, action) => {
            state.sodas = state.sodas.map(soda => {
                if(soda.type === action.payload)
                    return {
                        ...soda,
                        total: soda.total--
                    }
                return soda
            })
        },
        typing: (state, action) => {
            state.currentState = 'CASH_ADDED';
            if(action.payload === '#'){
                let isCodeAvailable = false;
                state.sodas = state.sodas.map(soda => {
                    if(state.code === soda.code){
                        isCodeAvailable = true;
                        if(state.cash >= soda.cost){
                            state.currentState = 'DISPATCH';
                            state.code = '';
                            state.change = state.cash - soda.cost;
                            return {
                                ...soda,
                                total: soda.total - 1
                            }
                        }
                        else{
                            state.code += action.payload
                            state.currentState = 'NOT_ENOUGHT'
                        }
                    }
                    return soda;
                });
                if(!isCodeAvailable){
                    state.currentState = 'NOT_VALID';
                    state.code = '';
                }
            }
            if(action.payload != '<-' && action.payload != '#'){
                if(state.code.length < 3)
                    state.code += action.payload
            } else {
                state.code = state.code.substring(0, state.code.length -1 )
            }
        },
        clear: (state) => {
            state.cash = 0;
            state.change = 0;
            state.code = '';
            state.currentState = 'START';
        }
    }, 
})

export const { addCash, removeCash, productSelected, typing, clear } = vendingSlice.actions

export default vendingSlice.reducer;