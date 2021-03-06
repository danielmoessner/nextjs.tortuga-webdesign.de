// import React from "react";
// import PropTypes from "prop-types";
// import { Link } from 'gatsby';
// import { Transition } from '@headlessui/react';
// import { graphql } from "gatsby";
import Container from "./Container";
import Animate from "./Animate";

function Component({ header }) {
  return (
    <header>
      <Container layout="sm">
        <div className="py-16 border-b border-gray-200">
          <div className="text-center">
            <Animate>
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">{header.title}</span>
              </h1>
            </Animate>
            {header.text && (
              <Animate delay={1}>
                <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  {header.text}
                </p>
              </Animate>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
}

// Component.defaultProps = {};

// Component.propTypes = {
//   header: PropTypes.shape({
//     title: PropTypes.string,
//     text: PropTypes.string,
//   }).isRequired,
// };

export default Component;

// export const headerFragment = graphql`
//   fragment header on PageYaml {
//     header {
//       title
//       text
//     }
//   }
//   fragment headerMarkdown on MarkdownRemarkFrontmatter {
//     header {
//       title
//       text
//     }
//   }
// `;
