interface IconProps {
  width?: string;
  height?: string;
  color?: string;
}

function init(props: IconProps): IconProps {
  const newProps = Object.assign({}, props); // Create a copy of the props object

  if (!newProps.width) newProps.width = "24";
  if (!newProps.height) newProps.height = "24";
  if (!newProps.color) newProps.color = "#000000";

  return newProps; // Return the modified props object
}

export function ChevronDown(props: IconProps) {
  props = init(props);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-chevron-down"
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 9l6 6l6 -6" />
    </svg>
  );
}

export function chevron_up(props: IconProps) {
  props = init(props);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-chevron-up"
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 15l6 -6l6 6" />
    </svg>
  );
}

export function LayoutSidebar(props: IconProps) {
  props = init(props);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-layout-sidebar"
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
      <path d="M9 4l0 16" />
    </svg>
  );
}
