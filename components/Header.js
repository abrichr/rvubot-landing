import { VscHubot } from 'react-icons/vsc';
import styles from './Header.module.css'

export default function Header({ title }) {
  return (
    <>
      <div className="flex flex-row justify-center mb-8">
        <VscHubot className="text-6xl font-bold"/>
        <div className="text-left ml-2">
          <div className="flex flex-row mt-1 relative">
            <h1 className="text-3xl font-bold">{title}</h1>
            {/*
            <h4 className="text-xl align-text-bottom absolute bottom-0 -right-8">.com</h4>
            */}
          </div>
          <h4>1-833-335-6116</h4>
        </div>
      </div>
      <p>
        Download. Run. Get paid.
      </p>
    </>
  );
}
