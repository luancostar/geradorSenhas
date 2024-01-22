/* eslint-disable react/prop-types */
import styles from './style.module.css'
 // src/components/PasswordGenerator.jsx
import React, { useState } from 'react';

export default function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);
  const textAreaRef = React.createRef();

  const generatePassword = () => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let newPassword = '';
    for (let i = 0; i < 12; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }
    setPassword(newPassword);
    setCopied(false);
  };

  const copyToClipboard = () => {
    textAreaRef.current.select();
    document.execCommand('copy');
    setCopied(true);
  };

  return (
    <div >
      <button className={styles.btnA} onClick={generatePassword}>Gerar Senha</button>
      <button className={styles.btnB} onClick={copyToClipboard} disabled={!password}>
        {copied ? 'Copiado!' : 'Copiar'}
      </button>
      <div>
        Senha Gerada: <strong>{password}</strong>
      </div>
      {/* Este textarea é usado para a seleção e execução do comando de cópia */}
      <textarea ref={textAreaRef} value={password} readOnly style={{ position: 'absolute', left: '-9999px' }} />
    </div>
  );
}
