import React from 'react';
import { FiSearch } from 'react-icons/fi';

import { Container, Search } from './styles';

function Trends() {
  return (
    <Container>
      <Search>
        <div>
          <FiSearch color="rgb(136, 153, 166)" size={17} />
          <input placeholder="Search Twitter" />
        </div>
      </Search>
      <section>
        <header>
          <h3>What's Happening</h3>
        </header>
        <div>
          <div>
            <span>Premier League</span>
            <strong>Liverpool vs Burnley</strong>
            <p>Trending with:</p>
          </div>
        </div>
        <div>
          <div>
            <span>Elvis + Nova Fiat Strada? SIM!</span>
            <strong>#ALendaSeSuperou</strong>
            <p>Promoted by Fiat Automóveis</p>
          </div>
        </div>
        <div>
          <div>
            <span>Trending Worldwide</span>
            <strong>Marcos Jeeves</strong>
            <p>9.8M Tweets</p>
          </div>
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </div>
        <div>
          <div>
            <span>International in Brazil</span>
            <strong>
              Quando você acha um Caterpie - e a internet te dá uma aula de
              biologia! 🐛
            </strong>
            <p>12.7k Tweets</p>
          </div>
        </div>
        <div>
          <a href="#"> Show More</a>
        </div>
      </section>
    </Container>
  );
}

export default Trends;
