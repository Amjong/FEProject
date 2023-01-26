import React, { useState } from 'react';
import { useFirebaseApp } from '../context/FirebaseContext';

export default function Register() {
  const { firebaseApp } = useFirebaseApp();
  const [fileInfo, setFileInfo] = useState({});
  const [descriptionText, setDescriptionText] = useState('');
  const [priceText, setPriceText] = useState('');
  const [categoryText, setCategoryText] = useState('');
  const [optionsText, setOptionsText] = useState('');

  return (
    <div className='flex flex-col'>
      <h1 className='text-center'>새로운 제품 등록</h1>
      <input
        className='border-2'
        type='file'
        placeholder='No file chosen'
        accept='image/*'
        id='fileUpload'
        onChange={(e) => {
          setFileInfo(e.target.files[0]);
        }}
      ></input>
      <input
        className='border-2'
        type='text'
        onChange={(e) => {
          setDescriptionText(e.target.value);
        }}
        value={descriptionText}
        id='descriptionText'
        placeholder='제품명'
      ></input>

      <input
        className='border-2'
        type='text'
        onChange={(e) => {
          setPriceText(e.target.value);
        }}
        value={priceText}
        id='priceText'
        placeholder='가격'
      ></input>

      <input
        className='border-2'
        type='text'
        onChange={(e) => {
          setCategoryText(e.target.value);
        }}
        value={categoryText}
        id='categoryText'
        placeholder='카테고리'
      ></input>

      <input
        className='border-2'
        type='text'
        onChange={(e) => {
          setOptionsText(e.target.value);
        }}
        value={optionsText}
        id='optionsText'
        placeholder='옵션들(콤마(,)로 구분)'
      ></input>

      <button>등록하기</button>
    </div>
  );
}
