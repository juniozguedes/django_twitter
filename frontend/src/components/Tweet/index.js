import React from 'react';

import {
  TweetContent,
  ImgContainer,
  TweetBody,
  Header,
  Content,
} from './styles';

import { Reply, Retweet, Favorite, TweetOptions } from '../../assets';

function Tweet() {
  return (
    <TweetContent>
      <ImgContainer>
        <div>
          <img
            src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
            alt=""
          />
        </div>
      </ImgContainer>
      <TweetBody>
        <Header>
          <div>
            <strong>Marcos Jeeves</strong>
            <p> @admin </p>
            <p>3m</p>
          </div>
          <TweetOptions size={15} color="#7a8a97" />
        </Header>
        <Content>
          <p>
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </p>
          <div>
            <span>
              <div>
                <Reply size={19} color="#7a8a97" />
              </div>
              <em>70K</em>
            </span>
            <span>
              <div>
                <Retweet size={19} color="#7a8a97" />
              </div>
              <em>1.2M</em>
            </span>
            <span>
              <div>
                <Favorite size={19} color="#7a8a97" />
              </div>
              <em>99M</em>
            </span>
          </div>
        </Content>
      </TweetBody>
    </TweetContent>
  );
}

export default Tweet;
