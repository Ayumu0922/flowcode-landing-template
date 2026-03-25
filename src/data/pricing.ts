export const plans = [
  {
    name: 'Free',
    price: '¥0',
    period: '/月',
    description: '個人プロジェクトに最適',
    features: ['プロジェクト3件まで', 'ベーシック分析', 'コミュニティサポート', '1GBストレージ'],
    cta: '無料で始める',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '¥2,980',
    period: '/月',
    description: '成長中のチームに',
    features: ['プロジェクト無制限', '高度な分析', '優先サポート', '100GBストレージ', 'カスタムドメイン', 'API アクセス'],
    cta: 'Proを始める',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'お問い合わせ',
    period: '',
    description: '大規模組織向け',
    features: ['全Pro機能', '専任サポート', '無制限ストレージ', 'SLA保証', 'SSO対応', 'カスタム統合'],
    cta: 'お問い合わせ',
    highlighted: false,
  },
];
