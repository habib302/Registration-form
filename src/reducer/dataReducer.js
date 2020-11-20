import { v4 as uuidv4 } from 'uuid';
import Moment from 'momment';
export const dataReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_DATA':
      return [...state, {
    schemeName: action.data.schemeName,
    dateOfIntroduction: action.data.dateOfIntroduction,
    schemeType:action.data.schemeType,
    yearlyInterestRate:action.data.yearlyInterestRate,
    irdaCode:action.data.irdaCode,
    yearlyMinimumInvestment:action.data.yearlyMinimumInvestment,
    minimumTenureOfInvestment:action.data.minimumTenureOfInvestment,
    prematureClosureCharge:action.data.prematureClosureCharge,
        id: uuidv4()}
      ]
    case 'REMOVE_DATA':
      return state.filter(data => data.id !== action.id);
    default:
      return state;
  }
} 
