import React from 'react';
import { IoIosAdd, IoIosPartlySunny } from 'react-icons/io';

import { Container, Home, WhatsHappening, TweetContent } from './styles';

function Timeline() {
  return (
    <Container>
      <Home>Home</Home>
      <WhatsHappening>
        <div>
          <img
            src="https://i.pinimg.com/1200x/8b/da/ca/8bdaca81d5ddbaeb92b61d6b5787d866.jpg"
            alt=""
          />
        </div>
        <TweetContent>
          <div>
            <span contentEditable role="textbox" />
          </div>
          <div>
            <div>
              <IoIosAdd size={22} />
              <IoIosPartlySunny size={22} />
              <IoIosAdd size={22} />
              <IoIosPartlySunny size={22} />
              <IoIosAdd size={22} />
              <IoIosPartlySunny size={22} />
            </div>
            <div>
              <button type="button">Tweet</button>
            </div>
          </div>
        </TweetContent>
      </WhatsHappening>
    </Container>
  );
}

export default Timeline;
