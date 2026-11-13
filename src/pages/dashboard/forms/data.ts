import AccountBalanceOutlined from '@mui/icons-material/AccountBalanceOutlined'
import ApiOutlined from '@mui/icons-material/ApiOutlined'
import DnsOutlined from '@mui/icons-material/DnsOutlined'
import FaceRetouchingNaturalOutlined from '@mui/icons-material/FaceRetouchingNaturalOutlined'
import GppGoodOutlined from '@mui/icons-material/GppGoodOutlined'
import GroupsOutlined from '@mui/icons-material/GroupsOutlined'
import HotelOutlined from '@mui/icons-material/HotelOutlined'
import Inventory2Outlined from '@mui/icons-material/Inventory2Outlined'
import LayersOutlined from '@mui/icons-material/LayersOutlined'
import MemoryOutlined from '@mui/icons-material/MemoryOutlined'
import PointOfSaleOutlined from '@mui/icons-material/PointOfSaleOutlined'
import ReceiptLongOutlined from '@mui/icons-material/ReceiptLongOutlined'
import ScheduleOutlined from '@mui/icons-material/ScheduleOutlined'
import SensorDoorOutlined from '@mui/icons-material/SensorDoorOutlined'
import StorageOutlined from '@mui/icons-material/StorageOutlined'
import SwapHorizOutlined from '@mui/icons-material/SwapHorizOutlined'
import TouchAppOutlined from '@mui/icons-material/TouchAppOutlined'
import ViewModuleOutlined from '@mui/icons-material/ViewModuleOutlined'
import WorkHistoryOutlined from '@mui/icons-material/WorkHistoryOutlined'
import type { ArchLayer, ErpModule, Experience, Principle, Profile, SkillGroup, Stat } from './types'

// Conteúdo da tela (textos em { pt, en }).

export const profile: Profile = {
  name: 'JP Mota',
  role: { pt: 'Desenvolvedor Full Stack · foco em Back end', en: 'Full Stack Developer · Back end focused' },
  summary: {
    pt: 'Construo e mantenho um ERP para parques e hotéis usado o dia todo, todos os dias: microsserviços .NET com filas, jobs agendados e integração em tempo real com dispositivos físicos de alta disponibilidade. Cuido do sistema da arquitetura até o refinamento da experiência de quem opera.',
    en: 'I build and maintain an ERP for parks and hotels used all day, every day: .NET microservices with queues, scheduled jobs and real-time integration with high-availability physical devices. I own the system from architecture to the polish of the operator experience.',
  },
  focus: ['C# / .NET', 'Microservices', 'RabbitMQ', 'Clean Architecture', 'OWASP', 'Product Design'],
  location: { pt: 'Brasil', en: 'Brazil' },
  timezone: 'UTC−3',
  languages: { pt: 'Português (nativo) · Inglês (intermediário)', en: 'Portuguese (native) · English (intermediate)' },
}

export const erpModules: ErpModule[] = [
  { id: 'access', icon: SensorDoorOutlined, name: { pt: 'Controle de acesso', en: 'Access control' }, description: { pt: 'Catracas e regras de entrada em tempo real', en: 'Turnstiles and real-time entry rules' } },
  { id: 'face', icon: FaceRetouchingNaturalOutlined, name: { pt: 'Biometria facial', en: 'Facial biometrics' }, description: { pt: 'Integração com leitores faciais', en: 'Facial reader integration' } },
  { id: 'pos', icon: PointOfSaleOutlined, name: { pt: 'Vendas em PDV', en: 'POS sales' }, description: { pt: 'Frente de caixa com alto volume', en: 'High-volume point of sale' } },
  { id: 'stock', icon: Inventory2Outlined, name: { pt: 'Estoque', en: 'Inventory' }, description: { pt: 'Movimentação e saldo multi-local', en: 'Multi-location stock and movements' } },
  { id: 'titles', icon: ReceiptLongOutlined, name: { pt: 'Gestão de títulos', en: 'Receivables & payables' }, description: { pt: 'Títulos a pagar e a receber', en: 'Payable and receivable titles' } },
  { id: 'guests', icon: HotelOutlined, name: { pt: 'Gestão de hóspedes', en: 'Guest management' }, description: { pt: 'Hospedagem e ciclo do hóspede', en: 'Lodging and guest lifecycle' } },
  { id: 'finance', icon: AccountBalanceOutlined, name: { pt: 'Financeiro', en: 'Finance' }, description: { pt: 'Fluxo de caixa e conciliação', en: 'Cash flow and reconciliation' } },
  { id: 'hr', icon: GroupsOutlined, name: { pt: 'RH', en: 'HR' }, description: { pt: 'Colaboradores e rotinas de pessoal', en: 'Staff and HR routines' } },
]

export const stats: Stat[] = [
  { id: 'modules', value: String(erpModules.length), icon: ViewModuleOutlined, label: { pt: 'módulos do ERP em que atuo', en: 'ERP modules I work on' } },
  { id: 'services', value: '5+', icon: DnsOutlined, label: { pt: 'microsserviços com filas RabbitMQ', en: 'microservices on RabbitMQ' } },
  { id: 'uptime', value: '24/7', icon: MemoryOutlined, label: { pt: 'integração com dispositivos físicos', en: 'physical device integration' } },
  { id: 'years', value: '3+', icon: WorkHistoryOutlined, label: { pt: 'anos de experiência', en: 'years of experience' } },
]

export const architecture: ArchLayer[] = [
  {
    id: 'edge',
    title: { pt: 'Dispositivos', en: 'Devices' },
    nodes: [
      { label: 'Catracas', icon: SensorDoorOutlined, detail: { pt: 'controle de acesso', en: 'access control' } },
      { label: 'Biometria facial', icon: FaceRetouchingNaturalOutlined, detail: { pt: 'leitores faciais', en: 'face readers' } },
      { label: 'PDVs', icon: TouchAppOutlined, detail: { pt: 'frente de caixa', en: 'point of sale' } },
    ],
  },
  {
    id: 'services',
    title: { pt: 'Serviços', en: 'Services' },
    nodes: [
      { label: 'ASP.NET Core API', icon: ApiOutlined, detail: { pt: 'Clean Architecture', en: 'Clean Architecture' } },
      { label: 'Microsserviços', icon: LayersOutlined, detail: { pt: 'domínios isolados', en: 'isolated domains' } },
    ],
  },
  {
    id: 'messaging',
    title: { pt: 'Mensageria & jobs', en: 'Messaging & jobs' },
    nodes: [
      { label: 'RabbitMQ', icon: SwapHorizOutlined, detail: { pt: 'filas e retentativas', en: 'queues and retries' } },
      { label: 'Hangfire', icon: ScheduleOutlined, detail: { pt: 'jobs agendados', en: 'scheduled jobs' } },
    ],
  },
  {
    id: 'data',
    title: { pt: 'Dados', en: 'Data' },
    nodes: [{ label: 'SQL + EF Core', icon: StorageOutlined, detail: { pt: 'persistência', en: 'persistence' } }],
  },
]

export const skillGroups: SkillGroup[] = [
  { id: 'backend', title: { pt: 'Back end', en: 'Back end' }, core: ['C#', '.NET', 'Entity Framework', 'RabbitMQ', 'Hangfire'], other: ['REST', 'Microservices', 'SQL'] },
  { id: 'frontend', title: { pt: 'Front end', en: 'Front end' }, core: ['React', 'JavaScript'], other: ['TypeScript', 'MUI', 'Tailwind'] },
  { id: 'infra', title: { pt: 'Infra', en: 'Infra' }, core: ['Docker', 'Linux'], other: ['Vertical scaling', 'High availability'] },
  { id: 'practices', title: { pt: 'Práticas', en: 'Practices' }, core: ['Clean Architecture', 'OWASP'], other: ['Product Design', 'UX'] },
]

export const experiences: Experience[] = [
  {
    id: 'erp',
    company: 'Tsplus Tecnologia',
    role: { pt: 'Desenvolvedor Full Stack', en: 'Full Stack Developer' },
    period: { pt: 'mar/2025 — atual', en: 'Mar 2025 — present' },
    current: true,
    description: {
      pt: 'Responsável por controle de acesso, PDV, estoque, títulos, hóspedes, financeiro, RH e integração com biometria facial. Microsserviços com RabbitMQ, jobs com Hangfire e comunicação com dispositivos físicos de altíssima disponibilidade.',
      en: 'Responsible for access control, POS, inventory, receivables, guests, finance, HR and facial biometrics integration. Microservices with RabbitMQ, Hangfire jobs and communication with very high-availability physical devices.',
    },
    tags: ['C#', 'EF Core', 'RabbitMQ', 'Hangfire', 'Docker', 'React'],
  },
]

export const principles: Principle[] = [
  { id: 'clean', icon: LayersOutlined, title: { pt: 'Clean Architecture', en: 'Clean Architecture' }, description: { pt: 'Domínio no centro, dependências para dentro.', en: 'Domain at the center, dependencies pointing in.' } },
  { id: 'owasp', icon: GppGoodOutlined, title: { pt: 'Segurança OWASP', en: 'OWASP security' }, description: { pt: 'Segurança desde o desenho, não no fim.', en: 'Security by design, not as an afterthought.' } },
  { id: 'ux', icon: TouchAppOutlined, title: { pt: 'UX para uso diário', en: 'UX for daily use' }, description: { pt: 'Sistemas que o operador usa 8h por dia sem atrito.', en: 'Systems operators use 8h a day without friction.' } },
  { id: 'ha', icon: MemoryOutlined, title: { pt: 'Alta disponibilidade', en: 'High availability' }, description: { pt: 'Filas, retentativas e tolerância a falhas.', en: 'Queues, retries and fault tolerance.' } },
]
