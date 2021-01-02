import React from 'react';

const Link = (props) => {
  const { link } = props;
  return (
    <div>
      <section>
        {link.description} ({link.url})
      </section>
    </div>
  );
};

export default Link;
