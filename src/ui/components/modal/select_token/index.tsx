import React from 'react'
import { SearchInput } from '../../input/search'
import { Slider } from '../../slider'
import { BaseModal } from '../base'
import Balances from './balances'
import Coins from './coins'

type Props = {}

enum Tabs {
  All = "all",
  Saved = "saved",
}

export const ModalSelectToken = (props: Props) => {
  return (
    <BaseModal title="Select a token">
      <SearchInput placeholder="Search for Token" />
      <Coins />
      <Slider tabs={Tabs} />
      <Balances />
    </BaseModal>
  )
}