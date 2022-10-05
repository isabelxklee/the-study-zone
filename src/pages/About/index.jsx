import React from "react";
import ScrollToTop from "../../components/ScrollToTop";
import * as Global from "../../styles";

const About = () => (
  <>
    <ScrollToTop />
    <Global.Wrapper>
      <Global.H1>About</Global.H1>
      <Global.P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam,
        mauris eget mattis maximus, nulla est hendrerit nunc, a cursus quam odio
        et dui. Cras tincidunt dapibus turpis ut pretium. Vestibulum semper nisi
        tellus, sed facilisis ligula sollicitudin varius. Donec dapibus pharetra
        lectus, et tempus neque cursus sed. Aliquam scelerisque non odio eget
        rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Global.P>
      <Global.P>
        Suspendisse imperdiet rhoncus dignissim. Morbi quis ipsum eu quam
        blandit ornare vehicula at sem. Quisque orci orci, porta ut ante quis,
        viverra rutrum orci. Phasellus a augue mi. Sed fringilla mattis odio,
        sed dignissim arcu feugiat ut. In urna lorem, tempus ut tellus non,
        venenatis ultricies augue. Curabitur aliquet laoreet lectus. Cras congue
        eu tortor tincidunt suscipit. Etiam at mauris dui. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Cras metus lorem, lacinia molestie dignissim laoreet, efficitur nec
        metus. Duis a magna non leo placerat consequat et ac orci.
      </Global.P>
    </Global.Wrapper>
  </>
);

export default About;
