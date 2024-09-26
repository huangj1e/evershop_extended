import React from 'react';
import PropTypes from 'prop-types';
import { Field } from '@components/common/form/Field';

export default function TawkWidgetSetting({
  tawkWidget: { text }
}) {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <p>Enter Tawk's script code below</p><br />
      <p>Enter content in AREA Enter Enter</p>
      <p>Select ALL from Page</p>
      <p>Sort order enter 1</p>

      <Field
        type="textarea"
        name="settings[text]"
        placeholder='<!--Start of Tawk.to Script-->
...
<!--End of Tawk.to Script-->'
        label="Code"
        value={text}
        style={{ width: '100%', height: '360px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
      />
    </div>
  );
}

TawkWidgetSetting.propTypes = {
  tawkWidget: PropTypes.shape({
    text: PropTypes.string,
  })
};

TawkWidgetSetting.defaultProps = {
  tawkWidget: {
    text: null,
  }
};

export const query = `
  query Query($settings: JSON) {
    tawkWidget(settings: $settings) {
      text
    }
  }
`;

export const variables = `{
  settings: getWidgetSetting()
}`;