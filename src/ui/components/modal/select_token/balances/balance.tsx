import React from 'react'
import StarIcon from '@/ui/icons/ui/star.svg'

type Props = {
  symbol: string,
  label: string,
  balance: string
  icon: React.ReactNode
}

const BalanceRow = ({ icon, symbol, label, balance }: Props) => {
  return (
    <section className="flex items-center justify-between">
      <section className="flex gap-2 items-center">
        <StarIcon className="w-4 h-4" />
        {icon}
        <section className="flex flex-col">
          <span className="text-text-s text-white font-semibold">{symbol}</span>
          <span className="text-text-s text-white text-opacity-80">{label}</span>
        </section>
      </section>
      <span className="text-text-s text-white text-opacity-80">{balance}</span>
    </section>
  )
}

export default BalanceRow