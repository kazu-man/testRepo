
import React, { useState } from 'react';
import { Stack } from '@strapi/design-system/Stack';
import { Box } from '@strapi/design-system/Box';
import { Typography } from '@strapi/design-system/Typography';
import { useIntl } from 'react-intl';

const Wysiwyg = ({ name, onChange, value, intlLabel, disabled, error, description, required }) => {
  const { formatMessage } = useIntl();
  
  return (
    <>
      <Stack size={1}>
        <Box>
          <Typography variant="pi" fontWeight="bold">
            {formatMessage(intlLabel)}
          </Typography>
          {required && 
            <Typography variant="pi" fontWeight="bold" textColor="danger600">*</Typography>
          }
        </Box>

        <style>
            {`
            .strtext {
                min-width: 100%;
                max-width: 100%;
                font-size:12px;
                border: 1px solid rgb(220, 220, 228);
                border-radius: 4px;
                padding: 12px 16px;
                background: rgb(255, 255, 255);
                outline: none;
                transition-property: border-color, box-shadow, fill;
                transition-duration: 0.2s;
            }
            .strtext:focus {
                border: 1px solid rgb(73, 69, 255); 
                box-shadow: rgb(73 69 255) 0px 0px 0px 2px;
            }
            `}
        </style>
        <textarea 
            className="strtext"
            rows="20"
            disabled={disabled} 
            name={name} 
            onChange={onChange} 
            value={value} 
        ></textarea>
        {error && 
          <Typography variant="pi" textColor="danger600">
            {formatMessage({ id: error, defaultMessage: error })}
          </Typography>
        }
        {description && 
          <Typography variant="pi">
            {formatMessage(description)}
          </Typography>
        }
      </Stack>
    </>
  );
};


export default Wysiwyg;
 