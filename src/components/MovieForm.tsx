import {
  Input,
  Select,
  Popover,
  PopoverButton,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'
import { ImageIcon } from './Icons/ImageIcon'
import { genres } from '../types/genres'
import { MagicWand } from './Icons/MagicWand'
import { useState } from 'react'
import { z } from 'zod'

const createMovieFormSchema = z.object({
  title: z.string().min(3),
  cover: z.string().url(),
  director: z.string().min(3),
  dateRelease: z.date(),
  genre: z.string().transform((value) => value.toUpperCase()),
})

export function MovieForm() {
  const [coverURL, setCoverURL] = useState('')

  return (
    <form className="flex flex-col gap-4 w-full">
      <div className="flex flex-row gap-4 w-full">
        <Popover className="relative">
          <PopoverButton>
            {coverURL.length >= 1 ? (
              <img
                src={coverURL}
                alt=""
                className="min-w-[194px] h-[288px] rounded-lg object-cover"
              />
            ) : (
              <div className="min-w-[194px] h-[288px] bg-slate-900 rounded-lg hover:bg-slate-800 transition cursor-pointer flex items-center justify-center">
                <ImageIcon />
              </div>
            )}
          </PopoverButton>
          <PopoverPanel
            anchor="bottom"
            className="bg-slate-800 p-4 rounded-lg w-[300px]"
          >
            <TabGroup>
              <TabList className="flex flex-row gap-3 items-center">
                <Tab>Carregar</Tab>
                <Tab>Integrar link</Tab>
              </TabList>
              <div className="w-full bg-slate-700 h-[1px] absolute left-0 my-3"></div>
              <TabPanels className="mt-6">
                <TabPanel>
                  <div className="h-[2px] w-20 left-2 bg-white absolute top-[50px] rounded-t-md"></div>
                  <button className="w-full rounded mb-3 h-7 text-white bg-pink-600 hover:bg-pink-800 transition">
                    Escolher um arquivo
                  </button>
                  <span className="block text-sm text-slate-500">
                    O tamanho máximo por arquivo é de 5mb
                  </span>
                </TabPanel>
                <TabPanel>
                  <div className="h-[2px] w-24 right-[118px] bg-white absolute top-[50px] rounded-t-md"></div>
                  <Input
                    type="text"
                    value={coverURL}
                    placeholder="Colar https://..."
                    className="w-full mb-3 bg-slate-600 placeholder-slate-400 p-1 rounded-md border border-slate-500 data-[hover]:shadow"
                    onChange={(e: any) => setCoverURL(e.target.value)}
                  />
                  <button
                    type="button"
                    className="w-full rounded mb-3 h-7 text-white bg-pink-600 hover:bg-pink-800 transition"
                  >
                    Link
                  </button>
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </PopoverPanel>
        </Popover>
        <div className="flex flex-col gap-8 w-full">
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-slate-500">
              Título do filme
            </label>
            <Input
              type="text"
              placeholder="Título do filme"
              className="bg-slate-900 placeholder-slate-500 p-2 rounded-md border border-slate-800 data-[hover]:shadow"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-slate-500">
              Diretor
            </label>
            <Input
              type="text"
              placeholder="Nome do diretor"
              className="bg-slate-900 placeholder-slate-500 p-2 rounded-md border border-slate-800 data-[hover]:shadow"
            />
          </div>
          <div className="flex flex-row gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-slate-500">
                Data de lançamento
              </label>
              <Input
                type="date"
                className="bg-slate-900 placeholder-slate-500 p-2 rounded-md border border-slate-800 data-[hover]:shadow"
              />
            </div>
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="" className="text-slate-500">
                Gênero
              </label>
              <Select className="w-full bg-slate-900 placeholder-slate-500 p-2 rounded-md border border-slate-800 data-[hover]:shadow">
                <option value="">Selectionar</option>
                {genres.map((genre) => {
                  return (
                    <option key={genre} value={genre}>
                      {genre}
                    </option>
                  )
                })}
              </Select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="" className="text-slate-500">
          Players
        </label>
        <div className="flex flex-row items-center gap-4">
          <Input
            type="text"
            placeholder="Colar https://..."
            className="w-full bg-slate-900 placeholder-slate-500 p-2 rounded-md border border-slate-800 data-[hover]:shadow"
          />
          <button className="w-12 flex items-center justify-center bg-pink-600 hover:bg-pink-800 transition h-11 rounded-md gap-2 font-semibold text-slate-950">
            <MagicWand />
          </button>
        </div>
      </div>
      <button className="bg-pink-600 hover:bg-pink-800 transition h-11 rounded-md gap-2 font-semibold text-slate-950">
        Cadastrar
      </button>
    </form>
  )
}
