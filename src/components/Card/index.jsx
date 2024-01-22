/* eslint-disable react/prop-types */
import styles from './style.module.css'
import Input from './Input';
import React, { useState } from 'react';

export default function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);
  const [passwordSize, setPasswordSize] = useState(12);

  const textAreaRef = React.createRef();

  const generatePassword = () => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let newPassword = '';
    for (let i = 0; i < passwordSize; i++) {
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
        <h1>Gerador de Senhas</h1>
        <label htmlFor="passwordSize">Tamanho:</label>
        <Input passwordSize={passwordSize} setPasswordSize={setPasswordSize} />
      <button className={styles.btnA} onClick={generatePassword}>Gerar Senha de {passwordSize} caracteres!</button>
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
