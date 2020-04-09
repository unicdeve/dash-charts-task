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
        {data.map((d, i) => (
          <DataContainer key={i} className='mb-3'>
            <RightContent>
              {d.icon && <i className={`fas ${d.icon}`} />}
              <div>
                <MainText>
                  {d.text}
                  {d.badge && (
                    <span
                      className={`badge badge-${d.badgeColor} text-uppercase`}
                    >
                      {d.badge}
                    </span>
                  )}
                </MainText>
                <MutedText>{d.mutedText}</MutedText>
              </div>
            </RightContent>

            {d.leftText && (
              <LeftContent>
                <span
                  className={`text-${d.badgeColor ? d.badgeColor : 'muted'}`}
                >
                  {d.leftText}
                </span>
              </LeftContent>
            )}
          </DataContainer>
        ))}
      </DisplayDataContainer>
    )}
  </>
);

export default DisplayData;
