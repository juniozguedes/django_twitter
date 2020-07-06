import React from 'react';

import { Container, Home, WhatsHappening, TweetContent } from './styles';

import { AddImage, AddEmoji, AddGif, AddPoll, AddSchedule } from '../../assets';

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
              <AddImage size={22} color="#fff" />
              <AddGif size={22} color="#fff" />
              <AddPoll size={22} color="#fff" />
              <AddEmoji size={22} color="#fff" />
              <AddSchedule size={22} color="#fff" />
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
