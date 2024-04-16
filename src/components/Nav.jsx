import { TypeAnimation } from 'react-type-animation';

const Nav = () => {
  return (
    <nav>
      <TypeAnimation
        sequence={[
          '{',
          100, // 1000 = 1s
          '{"R',
          100,
          '{ "RA',
          100,
          '{ "RAN',
          100,
          '{ "RAND',
          100,
          '{ "RANDA',
          100,
          '{ "RANDAL"',
          () => {
            console.log('Sequence completed');
          },
        ]}
        wrapper="h1"
        cursor={true}
        // repeat={Infinity}
        style={{ fontSize: '2em', display: 'inline-block' }}
      />

      <TypeAnimation
        sequence={[
          '}',
          100, // 1000 = 1s
        ]}
        wrapper="h1"
        cursor={false}
        // repeat={Infinity}
        style={{ fontSize: '2em', display: 'inline-block' }}
      />
    </nav>
  );
};

export default Nav;
