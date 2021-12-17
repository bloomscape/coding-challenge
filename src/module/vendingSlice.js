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
        change: 0
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
            state = state.sodas.map(soda => {
                if(soda.type === action.payload)
                    return {
                        ...soda,
                        total: soda.total--
                    }
                return soda
            })
        }
    }
})

export const { addCash, removeCash, productSelected } = vendingSlice.actions

export default vendingSlice.reducer;