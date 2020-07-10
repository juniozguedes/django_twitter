import React, { useState, useMemo, useRef } from 'react';
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';

import { useAuth } from '../../hooks/Auth';

import api from '../../services/api';

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
  const tweetInputRef = useRef(null);
  const { userData } = useAuth();
  const [characterCount, setCharacterCount] = useState(0);
  const [tweetContent, setTweetContent] = useState('');

  const maxLength = 240;

  const remainingLength = useMemo(() => maxLength - characterCount, [
    characterCount,
  ]);

  const characterCountPastMaxLength = useMemo(
    () => -characterCount + maxLength,
    [characterCount]
  );

  const allowedValue = useMemo(() => tweetContent.slice(0, maxLength), [
    tweetContent,
  ]);
  const refusedValuePart = useMemo(() => tweetContent.slice(maxLength), [
    tweetContent,
  ]);

  async function sendTweet() {
    try {
      await api.post(
        'api/v1/',
        {
          content: allowedValue,
        },
        {
          headers: { Authorization: `Token ${userData.token}` },
        }
      );
      tweetInputRef.current.textContent = '';
      setTweetContent('');
      setCharacterCount(0);
    } catch (err) {
      console.log(err);
    }
  }

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
                      ref={tweetInputRef}
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
                <span> {characterCountPastMaxLength} </span>
                <div />
              </>
            ) : (
              ''
            )}

            <div>
              <AddMoreTweets size={19} color="rgb(29,161,242)" />
            </div>
            <button disabled={!tweetContent} type="button" onClick={sendTweet}>
              Tweet
            </button>
          </div>
        </TweetOptions>
      </WhatsHappening>
    </Container>
  );
}

export default Timeline;
