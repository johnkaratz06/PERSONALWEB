import { useState, useEffect } from 'react';

const bigText = `Lorem Ipsum, consectetur adipiscing elit. Etiam lacinia vehicula fermentum. Ut ullamcorper quis leo ultricies pharetra. Vivamus sed molestie erat, eu porttitor risus. Morbi eget fringilla odio. Mauris sit amet suscipit ipsum, eu sollicitudin ante. Nulla consequat vitae turpis non dignissim. Quisque venenatis magna aliquam urna aliquet porttitor. Quisque in suscipit lectus. Donec varius bibendum dignissim. Nulla rhoncus velit eget lacus vulputate, vitae pharetra mauris sagittis. Ut odio dui, blandit eu elementum ut, semper id libero.

Maecenas tincidunt mattis tellus ut pellentesque. Quisque molestie cursus elit sit amet ultricies. Vivamus sit amet felis varius, tempus eros eu, placerat augue. Morbi et viverra turpis, vel suscipit ipsum. Duis dictum odio molestie laoreet mollis. Quisque vehicula, ipsum non malesuada mollis, quam turpis blandit enim, vitae sollicitudin ligula arcu a felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus non scelerisque magna. Quisque molestie vel erat sed facilisis. Nunc bibendum lacus justo, vitae posuere augue rutrum in. Fusce sed erat nibh. Nullam et diam elit. Mauris sed metus tincidunt, semper felis ut, facilisis risus.

In vitae hendrerit magna. Sed vehicula convallis ligula sed gravida. Praesent venenatis magna in euismod aliquet. Donec ultricies lorem at sapien commodo consectetur. Nulla sapien augue, pretium ut ullamcorper eget, tristique non nibh. Sed ornare facilisis cursus. Fusce ac tellus vehicula, ullamcorper diam a, feugiat urna. Donec vel vehicula lectus. Mauris pulvinar vel sem ac finibus. Nullam sit amet cursus elit. Vestibulum iaculis tincidunt tempus. Nulla lorem diam, sodales sit amet egestas a, ornare sit amet est. Aenean libero leo, ultricies quis metus at, posuere finibus magna. In scelerisque, dui ut ultricies maximus, tellus lectus tincidunt sem, a fermentum eros mauris ac dui. Nam neque magna, molestie sit amet mi eu, viverra tincidunt nunc.

Curabitur pharetra eleifend diam, non blandit sapien rutrum in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque at elit et nisi scelerisque dapibus ac vel neque. Morbi vitae hendrerit ipsum. Pellentesque sem nisi, sagittis id velit id, mattis interdum velit. Praesent sed turpis id massa efficitur ultricies in sed felis. Vivamus iaculis ullamcorper ipsum, eget aliquet velit. Suspendisse malesuada euismod consectetur. Etiam fringilla malesuada lorem sed faucibus. Ut tincidunt, risus in consectetur bibendum, ligula velit eleifend nisl, non rutrum mauris nibh posuere turpis. Pellentesque faucibus ut quam quis facilisis.

Ut mattis risus vel tortor porttitor elementum. Pellentesque magna leo, hendrerit in eros sed, ornare aliquet mi. Nam tempus dolor et vestibulum tincidunt. Proin fermentum malesuada nisl ultrices tincidunt. Etiam eget diam sit amet ex ullamcorper fermentum. Praesent viverra mi mi, vel laoreet mauris pretium quis. Curabitur eget vestibulum est. Duis finibus ligula eu metus tincidunt, eget blandit erat lobortis. Nullam sapien arcu, interdum vel tristique eu, gravida lobortis nulla. Vivamus auctor rhoncus nibh, et tempus nisl elementum eget. Cras blandit odio vel quam pretium, id pretium lectus malesuada.`;

function TXT() {
  const lines = bigText.split('\n').filter(line => line.trim() !== '');
  const [visibleLines, setVisibleLines] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);

  const initialDelay = 2250; // 2.25 after loading
  const lineDelay = 700; // ms between lines

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStartAnimation(true);
    }, initialDelay);

    return () => clearTimeout(startTimeout);
  }, []);

  useEffect(() => {
    if (!startAnimation) return;

    if (visibleLines < lines.length) {
      const timeout = setTimeout(() => {
        setVisibleLines(visibleLines + 1);
      }, lineDelay);
      return () => clearTimeout(timeout);
    }
  }, [startAnimation, visibleLines, lines.length]);

  return (
    <div style={{ whiteSpace: 'pre-wrap', fontSize: '18px', lineHeight: '1.5em' }}>
      {lines.slice(0, visibleLines).map((line, i) => (
        <p key={i} style={{ margin: '0 0 1em 0' }}>
          {line}
        </p>
      ))}
    </div>
  );
}

export default TXT;
