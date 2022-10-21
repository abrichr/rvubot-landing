import { VscHubot } from 'react-icons/vsc';
import styles from './Header.module.css'

export default function Header({ title }) {
  return (
    <>
      <div className="flex flex-row justify-center mb-8">
        <VscHubot className="text-5xl font-bold"/>
        <div>
          <h1 className="text-3xl font-bold">{title}</h1>
          <h4 className="text-l font-bold">1-833-335-6116</h4>
        </div>
      </div>
      <p>
        Download. Run. Get paid.
      </p>
    </>
  );
}
