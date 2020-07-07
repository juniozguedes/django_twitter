import React, { useState } from 'react';
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';

import {
  Container,
  Home,
  WhatsHappening,
  TweetContent,
  HighlightContent,
  TweetOptions,
} from './styles';

import {
  AddImage,
  AddEmoji,
  AddGif,
  AddPoll,
  AddSchedule,
  AddMoreTweets,
} from '../../assets';

function Timeline() {
  const [characterCount, setCharacterCount] = useState(0);
  const [tweetContent, setTweetContent] = useState('');

  const maxLength = 240;
  const remainingLength = maxLength - characterCount;

  const allowedValue = tweetContent.slice(0, maxLength);
  const refusedValuePart = tweetContent.slice(maxLength);

  return (
    <Container>
      <Home>Home</Home>

      <WhatsHappening>
        <div>
          <div>
            <img
              src="https://s2.glbimg.com/BcSPYJx1ySVa0uYhU6QdefXLxIc=/600x900/smart/e.glbimg.com/og/ed/f/original/2020/04/02/marcosjeeves_90330589_147516643220509_837326692536612850_n.jpg"
              alt=""
            />
          </div>
          <TweetContent>
            <div>
              <ScrollSync>
                <>
                  <ScrollSyncPane>
                    <span
                      contentEditable
                      onInput={(e) => {
                        setTweetContent(e.currentTarget.textContent);
                        setCharacterCount(e.currentTarget.textContent.length);
                      }}
                    />
                  </ScrollSyncPane>
                  <ScrollSyncPane>
                    <HighlightContent characterLimit={characterCount >= 1345}>
                      {remainingLength < 0 ? (
                        <>
                          {allowedValue}
                          <mark>{refusedValuePart}</mark>
                        </>
                      ) : (
                        ''
                      )}
                    </HighlightContent>
                  </ScrollSyncPane>
                </>
              </ScrollSync>
            </div>
          </TweetContent>
        </div>
        <TweetOptions>
          <div>
            <AddImage size={22} color="rgb(29,161,242)" />
            <AddGif size={22} color="rgb(29,161,242)" />
            <AddPoll size={22} color="rgb(29,161,242)" />
            <AddEmoji size={22} color="rgb(29,161,242)" />
            <AddSchedule size={22} color="rgb(29,161,242)" />
          </div>
          <div>
            {characterCount > maxLength ? (
              <>
                <span> {-characterCount + 240} </span>
                <div />
              </>
            ) : (
              ''
            )}

            <div>
              <AddMoreTweets size={19} color="rgb(29,161,242)" />
            </div>
            <button type="button">Tweet</button>
          </div>
        </TweetOptions>
      </WhatsHappening>
    </Container>
  );
}

export default Timeline;
