import React from 'react';

import {
  DisplayDataContainer,
  DataContainer,
  RightContent,
  MainText,
  MutedText,
  LeftContent
} from './display-data.styled';

const DisplayData = ({ data }) => (
  <>
    {data && (
      <DisplayDataContainer>
        {data.map(d => (
          <DataContainer className='mb-3'>
            <RightContent>
              <MainText>
                {d.text}
                {d.badge && (
                  <span class={`badge badge-${d.badgeColor} text-uppercase`}>
                    {d.badge}
                  </span>
                )}
              </MainText>
              <MutedText className='text-muted'>{d.mutedText}</MutedText>
            </RightContent>

            {d.leftText && (
              <LeftContent>
                <span className={`text-${d.badgeColor}`}>{d.leftText}</span>
              </LeftContent>
            )}
          </DataContainer>
        ))}
      </DisplayDataContainer>
    )}
  </>
);

export default DisplayData;
