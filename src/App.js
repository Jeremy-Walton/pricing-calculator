import React from 'react';
import './App.css';

const FIXED_PROCESSING_FEE_PER_PARTICIPANT = 1.59;
const PARTICIPANT_PROCESSING_FEE_PERCENTAGE = 3.5 / 100;
const PLATFORM_USAGE_PERCENTAGE_FEE = 2.5 / 100;

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      ticket_price: '',
      tickets_sold: 0.00,
      gym_revenue: 0.00,
      user_pays: 0.00
    };
  }

  handlePriceBlur(e) {
    const ticket_price = parseFloat(this.state.ticket_price).toFixed(2);
    this.setState({ ticket_price });
  }

  updatePrice(event) {
    this.calculatePrices(event.target.value, this.state.tickets_sold);
  }

  updateSold(event) {
    this.calculatePrices(this.state.ticket_price, event.target.value);
  }

  calculatePrices(ticket_price, tickets_sold) {
    const base_price = ticket_price * tickets_sold;
    const user_pays = base_price + ((ticket_price * PARTICIPANT_PROCESSING_FEE_PERCENTAGE + FIXED_PROCESSING_FEE_PER_PARTICIPANT) * tickets_sold)
    const gym_revenue = base_price - (PLATFORM_USAGE_PERCENTAGE_FEE * base_price);

    this.setState({ ticket_price, tickets_sold, gym_revenue, user_pays });
  }

  render() {
    const { ticket_price, tickets_sold, gym_revenue, user_pays } = this.state;

    return (
      <div className='App'>
        <div className='calculator-form'>
          <div className='calculator-form__header'>
            <h1>Calculate your potential earnings</h1>
          </div>
          <div className='calculator-form__row'>
            <div className="ticket-price">
              <div className='dollar'>$</div>
              <div className='form-control'>
                <label htmlFor='ticket_price'>Ticket Price</label>
                <input id='ticket_price' type="number" placeholder='0.00' onChange={e => this.updatePrice(e)} onBlur={e => this.handlePriceBlur(e)} value={ticket_price} />
              </div>
            </div>
            <span className='multiply'>X</span>
            <div className='form-control'>
              <label htmlFor='tickets_sold'>Tickets Sold</label>
              <input id='tickets_sold' type='number' onChange={e => this.updateSold(e)} value={tickets_sold} />
            </div>
          </div>
        </div>
        <div className='calculator-output'>
          <div className='calculator-output__header'>
            <h1>Your estimated payout</h1>
          </div>
          <div className='calculator-output__row'>
            <div>{gym_revenue.toFixed(2)}</div>
          </div>
          <div className='calculator-output__row'>
            <div className='calculator-output__row--header'>Attendee pays</div>
            <div className='calculator-output__row--user-pays'>{user_pays.toFixed(2)}</div>
          </div>
        </div>
      </div>
    );
  }
};
