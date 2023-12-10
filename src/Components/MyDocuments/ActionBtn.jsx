import * as React from 'react';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';

export default function AnchorElTooltips(props) {
  const positionRef = React.useRef({
    x: 0,
    y: 0,
  });
  const popperRef = React.useRef(null);
  const areaRef = React.useRef(null);

  const handleMouseMove = (event) => {
    positionRef.current = { x: event.clientX, y: event.clientY };

    if (popperRef.current != null) {
      popperRef.current.update();
    }
  };

  return (
    <Tooltip
      title={props.tooltip}
      placement="top"
      arrow
      PopperProps={{
        popperRef,
        anchorEl: {
          getBoundingClientRect: () => {
            return new DOMRect(
              positionRef.current.x,
              areaRef.current.getBoundingClientRect().y,
              0,
              0,
            );
          },
        },
      }}
    >
      <Box
        ref={areaRef}
        onMouseMove={handleMouseMove}
        sx={{
          bgcolor: `${props.bgColor}`,
          color: `${props.color}`,
          borderRadius: 100,
          p: .5,
          ml: .8,
          fontSize: '5px !important'
        }}
      >
        {props.icon}
      </Box>
    </Tooltip>
  );
}
