import React from 'react'
import { SearchInput } from '../../input/search'
import { Slider } from '../../slider'
import { BaseModal } from '../base'
import Balances from './balances'
import Coins from './coins'

type Props = {
    onClose: () => void;
}

enum Tabs {
  All = "all",
  Saved = "saved",
}

export const ModalSelectToken = ({onClose}: Props) => {
  return (
    <BaseModal onClose={onClose} title="Select a token" maxWidth="max-w-lg" maxHeight="max-h-[600px]">
      <SearchInput placeholder="Search for Token" />
      <Coins />
      <Slider tabs={Tabs} />
      <Balances />
    </BaseModal>
  )
}