import { LinkComponent } from './navigation/LinkComponent';

export default function Header() {
  return (
    <div>
      <h1>Prestagile</h1>
      <div>
        <LinkComponent
          target="/test"
          child={<button color="primary">Test</button>}
        />
      </div>
    </div>
  );
}
