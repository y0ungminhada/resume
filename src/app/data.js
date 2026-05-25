export const profile = {
  name: "박영민",
  title: "AppSec Engineer",
  headline: [
    "취약점을 찾는 것에서 그치지 않고, 탐지 시스템으로 만듭니다. 실시간 의심 거래 탐지 대시보드와 스마트컨트랙트 취약점 분석 자동화 시스템을 개발하며, 보안 분석 결과를 실제 동작하는 시스템으로 구현해왔습니다. 해당 프로젝트는 업사이드 아카데미 성과공유회 우수상 수상 및 UDC 발표로 이어졌습니다.",
    "새로운 기술을 학습하면 혼자 이해하는 것에서 그치지 않고 공유합니다. ZK(영지식 증명) 스터디를 직접 주도하여 커리큘럼을 설계하고, 학습 내용을 블로그에 정리하는 것을 넘어 팀원들과 함께 한국어 GitBook으로 문서화하여 배포했습니다. 누구나 접근할 수 있는 자료를 만드는 것이 생태계에 기여하는 방법이라고 생각합니다.",
  ],
  avatar: "https://github.com/y0ungminhada.png?size=240",
};

export const contact = [
  { label: "Phone", value: "010-4076-2540", href: "tel:01040762540" },
  {
    label: "Email",
    value: "pym000526@gmail.com",
    href: "mailto:pym000526@gmail.com",
  },
  {
    label: "Blog",
    value: "velog.io/@omin_00",
    href: "https://velog.io/@omin_00/",
  },
  {
    label: "GitHub",
    value: "github.com/y0ungminhada",
    href: "https://github.com/y0ungminhada",
  },
];

export const introductions = [
  {
    title: "취약점을 찾는 것에서 그치지 않고, 탐지 시스템으로 만듭니다.",
    body: "실시간 의심 거래 탐지 대시보드와 스마트컨트랙트 취약점 분석 자동화 시스템을 개발하며, 보안 분석 결과를 실제 동작하는 시스템으로 구현해왔습니다. 해당 프로젝트는 업사이드 아카데미 성과공유회 우수상 수상 및 UDC 발표로 이어졌습니다.",
  },
  {
    title:
      "새로운 기술을 학습하면 혼자 이해하는 것에서 그치지 않고 공유합니다.",
    body: "ZK(영지식 증명) 스터디를 직접 주도하여 커리큘럼을 설계하고, 학습 내용을 블로그에 정리하는 것을 넘어 팀원들과 함께 한국어 GitBook으로 문서화하여 배포했습니다.",
  },
];

export const projects = [
  {
    slug: "lumosv2",
    title: "LumosV2",
    role: "AI 보안 사고 분석 툴",
    period: {
      start: { label: "2026. 01", dateTime: "2026-01" },
      current: true,
    },
    sortKey: "2026-01",
    summary:
      "트랜잭션 해시 하나만 입력하면 공격 lifecycle 복구부터 PoC 생성, 근본 원인 분석까지 End-to-End로 자동화하는 AI 기반 스마트컨트랙트 보안 사고 분석 툴입니다.",
    impact: "사람이 했을 때 최소 2시간 이상 걸리던 분석을 20~40분 안에 완료",
    tags: [
      "Python",
      "Foundry (cast/forge)",
      "EVM Bytecode",
      "Etherscan API",
      "LLM",
      "PoC Automation",
    ],
    achievements: ["진행 중", "분석 시간 단축"],
    coverImage: "",
    media: [],
    details: {
      overview:
        "스마트컨트랙트 해킹이 발생하면 분석가가 트랜잭션 trace를 한 줄씩 수동으로 뜯어보고, PoC를 직접 작성하고, 근본 원인을 추론하는 작업을 모두 손으로 수행해야 했습니다. LumosV2는 트랜잭션 해시 하나만 입력하면 공격 lifecycle 복구부터 PoC 생성, 근본 원인 분석까지 End-to-End로 자동화하는 시스템으로, 며칠 단위의 사후 분석 워크플로우를 수십 분 단위로 줄이는 것을 목표로 했습니다.",
      problem:
        "숙련된 분석가도 사고 하나당 며칠에서 몇 주가 걸렸고, DeFi 사고가 빈번해질수록 분석 리소스가 명확한 병목이 됐습니다. 자동화하면서도 (1) 분석 시간 단축, (2) AI 결과의 신뢰성 확보, (3) 누가 돌려도 같은 수준의 일관성, (4) 결론을 못 내릴 때 억지로 결론 내리지 않는 정직함을 동시에 달성해야 했습니다. 특히 단순 코드 취약점 탐지가 아니라 비즈니스 로직과 상태 변화를 함께 분석해야 실제 공격 메커니즘이 드러난다는 점이 핵심 도전이었습니다.",
      contributions: [
        "트랜잭션 재실행 · trace 추출 · bytecode 디컴파일 · PoC 자동 생성/검증 · 근본 원인 분석으로 이어지는 5단계 파이프라인 전 영역을 팀과 함께 설계하고 구현했습니다.",
        "“결정론적으로 추출 가능한 것은 코드, 추론이 필요한 것은 AI, 검증 가능한 것은 실제 실행”이라는 역할 분리 원칙을 같이 정립해 각 단계의 책임을 명확히 했습니다.",
        "Foundry 기반 PoC 자동 검증 루프와 Etherscan verified source code 연계를 통해, AI 환각을 실행 결과로 거르고 파일:라인 단위의 패치 방향까지 도출되도록 했습니다.",
      ],
      implementation: [
        {
          section: "Pipeline 5단계",
          image: {
            src: "/lumosv2-pipeline.svg",
            alt: "LumosV2 5단계 파이프라인 다이어그램",
            caption: "LumosV2의 5단계 자동 분석 파이프라인",
          },
          items: [
            {
              title: "1. 트랜잭션 재실행 & trace 수집",
              body: "공격 시점의 블록체인 상태를 재현해 Foundry `cast run`으로 트랜잭션을 다시 실행하고, 모든 함수 호출과 상태 변화를 기록한 뒤 cEFG(호출 관계 그래프)로 정규화했습니다.",
            },
            {
              title: "2. 공격 관련 부분 추출",
              body: "수천 개 호출 중 (1) 공격자 컨트랙트가 직접 실행한 부분, (2) 공격자가 배포한 컨트랙트의 부분, (3) DELEGATECALL로 위임된 부분만 세 가지 규칙으로 자동 필터링해 핵심 60~70개 호출로 축소했습니다.",
            },
            {
              title: "3. Bytecode → Pseudocode 변환",
              body: "EVM bytecode를 Solidity-like pseudocode로 변환하고, Dual IR을 도입해 코드 구조뿐 아니라 trace에서 관찰된 실제 값까지 함께 보존해 후속 PoC 생성 단계에서 활용할 수 있게 했습니다.",
            },
            {
              title: "4. PoC 자동 생성 & Foundry 검증 루프",
              body: "결정론적 sketch 생성 → AI refinement → `forge test` 실행 → 실패 시 에러 피드백을 반복하는 루프를 구성해, 실제 EVM에서 실행·검증된 PoC만 통과시켜 AI 환각을 실행 결과로 걸렀습니다. 파이프라인에서 가장 핵심적인 단계입니다.",
            },
            {
              title: "5. 근본 원인 분석",
              body: "검증된 PoC 위에서 Etherscan의 verified source code를 가져와 파일:라인 단위로 근본 원인과 패치 방향을 도출했습니다. 단순히 “취약점이 있다”가 아니라 “어느 라인의 어느 연산을 어떻게 수정해야 한다”까지 제시하도록 설계했습니다.",
            },
          ],
        },
        {
          section: "설계 원칙",
          items: [
            {
              title: "역할 분리",
              body: "결정론적으로 추출 가능한 것은 코드로, 추론이 필요한 것은 AI로, 검증 가능한 것은 실제 실행으로 분리해 각 단계가 자기 한계 안에서만 작동하도록 했습니다. 결론을 못 내릴 때는 억지로 결론을 만들지 않도록 했습니다.",
            },
          ],
        },
      ],
      techStack: [
        "Python",
        "Foundry (cast/forge)",
        "EVM Bytecode",
        "Etherscan API",
        "LLM",
        "PoC Automation",
      ],
      result:
        "사람이 했을 때 최소 2시간 이상 걸리던 분석을 20~40분 사이에 완료할 수 있게 됐습니다. 단순 코드 정적 분석으로는 잡히지 않던 비즈니스 로직 결함도 trace + 코드 + 상태 변화를 함께 보는 방식에서 드러난다는 것을 확인했습니다.",
      retrospective:
        "AI에 모든 걸 맡기는 접근은 신뢰성과 비용 양쪽에서 무너집니다. 결정론·추론·검증을 명확히 분리하고, 검증 가능한 단계에서는 반드시 실제 실행으로 확인시키는 설계가 실용적인 AI 시스템의 핵심이라는 점을 체득했습니다.",
    },
  },
  {
    slug: "memexstar",
    title: "MemeXstar",
    role: "SocialFi + InfoFi dApp",
    period: {
      start: { label: "2025. 11", dateTime: "2025-11" },
      end: { label: "2025. 12", dateTime: "2025-12" },
    },
    sortKey: "2025-12",
    summary:
      'MemeX 생태계 위에서 동작하는 SocialFi + InfoFi 통합 dApp으로, 봇과 시빌 공격에 강한 영향력 지표(Meme Index), 예측 시장, PoH 기반 신뢰 레이어를 결합해 "진짜 영향력 있는 사용자"를 식별하는 시스템입니다.',
    impact: "Memekathon Seoul 2025 SocialFi & InfoFi 분야 1st Place",
    tags: [
      "Solidity",
      "Slither",
      "SocialFi",
      "Scoring",
      "PoH (Proof-of-Human)",
      "Prediction Market",
      "Smart Contract Hardening",
      "Log-normal Scoring",
      "Sybil Resistance",
    ],
    achievements: ["1st Place", "Sybil-resistant scoring"],
    coverImage: "",
    media: [],
    details: {
      overview:
        'MemeXtar는 "참여량이 많은 사용자"가 아닌 "진짜 영향력 있는 사용자"를 식별하기 위해 설계된 SocialFi + InfoFi 통합 dApp입니다. 온체인 활동(accountVolume)과 소셜 활동(socialVolume)을 Meme Index 하나로 결합하고, 그 위에 예측 시장과 PoH 신뢰 레이어를 얹어 보상 구조가 조작 비용보다 신뢰 비용에 더 민감하도록 설계했습니다.',
      problem:
        "SocialFi 서비스의 보상과 노출은 활동량에 비례하기 때문에 세 가지 구조적 취약점이 동시에 발생합니다 — (1) 보상을 노린 저품질 콘텐츠 농사, (2) 봇·시빌 공격에 의한 보상풀 고갈, (3) 광고주 입장의 정량화된 영향력 지표 부재.\n\n핵심은 활동 1건의 한계 비용이 봇에게는 0에 가깝지만 사람에게는 시간·노력 비용이 든다는 점입니다. 단순 카운트 기반 시스템은 구조적으로 봇 친화적이어서, 조작 비용보다 신뢰 비용에 민감한 새로운 지표가 필요합니다.",
      contributions: [
        "온체인 활동(accountVolume)과 소셜 활동(socialVolume) 두 축으로 분리한 영향력 지표 Meme Index를 설계해, 두 축이 모두 활성화된 사용자에게만 높은 점수가 부여되도록 만들었습니다.",
        "log(1+V) 정규화를 도입해 활동량 1만건과 1억건의 점수 차이가 압축되도록 만들고, 봇이 활동을 100배 늘려도 점수는 log 배수만큼만 증가하는 구조로 설계했습니다.",
        "PoH 검증 결과를 점수의 게이트가 아닌 multiplier(예: Tier 3 = 1.5x)로 작동시켜, 활동량 증가만으로는 영향력이 늘지 않는 이중 방어를 구성했습니다.",
        "MarketCore · MarketRegistry · AdminControl 세 컨트랙트에 Slither를 적용해 Reentrancy · Unprotected Transfer · 권한 경계 위반을 도출하고, CEI 패턴 적용과 nonReentrant modifier 일괄 적용으로 보안을 강화했습니다.",
        "지표 설계 · PoH 신뢰 레이어 · 보안 검토를 분리된 모듈이 아니라 Meme Index → PoH multiplier → 하드닝된 컨트랙트로 이어지는 하나의 일관된 보상 흐름으로 통합했습니다.",
      ],
      implementation: [
        {
          section: "Meme Index — 활동량을 영향력으로 환산하는 핵심 지표",
          image: {
            src: "/MemeXstar%20Dashboard.png",
            alt: "MemeXtar 랜딩 페이지의 Top signalers 보드 — Meme Index 기반 영향력 순위",
            caption: "Meme Index 기반으로 영향력 순위를 보여주는 Influencer Board",
          },
          body: "Meme Index는 한 사용자의 활동을 accountVolume(온체인)과 socialVolume(소셜) 두 축으로 분리해 집계한 뒤, 결합·정규화해 0~10 스케일의 영향력 점수로 환산합니다.\n\naccountVolume(온체인 축)은 Holdings, Trades, UserType을 가중 합산합니다. 핵심 의미는 단순합니다 — 활동에 실제 자본 비용이 든 사용자는 봇이기 어렵습니다.\n\nsocialVolume(소셜 축)은 Posts, Reposts, Likes, Replies 네 신호를 사용하되, 자동화 한계 비용에 따라 가중치를 차등 적용했습니다. Like는 자동화가 쉬워 가중치를 낮추고, Post는 어려워 가중치를 높였습니다.\n\n최종 점수 산출 공식:",
          code: "V = accountVolume + socialVolume\nMemeIndex = log(1 + V) * scaleFactor   // 결과: 0~10 스케일",
          bodyAfter:
            "log(1+V)의 효과는 분명합니다. 활동량이 10배 늘면 점수는 약 1점, 100배여도 2점만 증가합니다. 봇이 활동을 100배 부풀려도 영향력은 2점만 늘어나는 구조여서, 봇 운영의 한계 효용이 빠르게 사라집니다. 동시에 진성 사용자도 상위권에서 미세하게 차별화되는 곡선은 유지됩니다.\n\n대시보드는 Meme Index, Total Volume(V), Social Signal 백분위, Prediction Market 참여량을 실시간 시각화해 광고주가 고잠재력 크리에이터를 즉시 식별할 수 있게 했습니다.",
        },
        {
          section: "$M Prediction Market — 영향력에 가격을 매기는 경제 레이어",
          image: {
            src: "/MemeXstar%20PredictionMarket.png",
            alt: "$M Prediction Market 화면 — 크리에이터 성장에 YES/NO 포지션을 잡는 마켓",
            caption: "$M으로 크리에이터의 미래 영향력에 베팅하는 예측 시장",
          },
          body: 'Meme Index가 "현재 영향력"을 측정한다면, 예측 시장은 "미래 영향력"에 가격을 매깁니다. 사용자는 $M 토큰으로 크리에이터의 성장에 YES/NO 포지션을 잡고, 예측이 맞으면 보상을 받습니다.\n\n스마트 컨트랙트는 3-tier 구조로 분리했습니다:',
          items: [
            {
              title: "MarketCore",
              body: "포지션, 가격 결정, 정산 같은 마켓 핵심 로직.",
            },
            {
              title: "MarketRegistry",
              body: "다중 마켓의 등록·인덱싱·라이프사이클 관리.",
            },
            {
              title: "AdminControl",
              body: "거버넌스 권한(마켓 생성, 분쟁 해결, 비상 정지)을 격리.",
            },
          ],
          bodyAfter:
            "이 분리는 단순 코드 정리가 아니라 공격 표면 축소 목적입니다. 마켓 로직과 권한 로직이 한 컨트랙트에 있으면 reentrancy 한 번으로 거버넌스까지 노출되지만, 분리되어 있으면 공격이 단계적으로 막힙니다.",
        },
        {
          section: "Trust Layer — PoH가 점수의 multiplier로 작동",
          image: {
            src: "/MemeXstar%20POH.png",
            alt: "Evaluate Creators 화면 — Credibility · Influence · Originality · Toxicity 점수 평가",
            caption:
              "Credibility · Influence · Originality · Toxicity로 크리에이터를 평가하는 화면",
          },
          body: "PoH 시스템은 세 컴포넌트로 구성됩니다 — UserScore(사람일 확률 0~100%), Eval System(거래 주기·인터랙션 자연도 등 행동 데이터만으로 평가, 개인정보 비요구), ReputationNFT(Trust Tier를 양도 불가 NFT로 발급해 시빌 비용 부과).\n\n가장 중요한 결정은 PoH를 게이트가 아닌 multiplier로 만든 것입니다. 게이트면 신규 사용자 경험을 해치고 한 번 통과한 뒤로는 무방비가 됩니다. 반면 multiplier(예: Tier 3 = 1.5x, Tier 1 = 0.7x)는 신규 사용자도 낮은 가중치로 시스템을 쓰게 하면서, 봇은 PoH 점수를 못 따므로 활동량을 늘려도 multiplier에서 깎이게 만듭니다.\n\n이게 Meme Index의 로그 정규화와 결합되면 이중 방어가 됩니다 — 봇은 (a) 활동을 늘려도 log로 압축되고, (b) PoH multiplier에서 또 깎입니다.",
        },
        {
          section: "Contract Hardening — Slither 정적 분석 기반 보안 강화",
          body: "세 컨트랙트 모두에 Slither를 적용해 세 가지 카테고리를 우선순위로 검토했습니다.",
          items: [
            {
              title: "Reentrancy",
              body: "정산·보상·청산 등 자금 이동 함수를 모두 식별하고 CEI(Checks-Effects-Interactions) 패턴 위반 지점을 수정, nonReentrant modifier를 entry point에 일괄 적용했습니다.",
            },
            {
              title: "Unprotected Transfer",
              body: "AdminControl로 권한이 격리돼 있어도 개별 transfer 함수에 modifier가 빠지면 무의미하므로, 모든 자금 이동 경로의 권한 modifier 적용 여부를 점검했습니다.",
            },
            {
              title: "권한 경계 검증",
              body: "AdminControl의 권한이 다른 컨트랙트에서 우회되지 않는지 호출 그래프로 추적하고, delegatecall 사용 지점의 storage layout 안전성을 확인했습니다.",
            },
          ],
          bodyAfter:
            "Slither의 high/medium 경고를 (a) 즉시 패치 / (b) false positive / (c) 차후 작업으로 트리아지한 뒤, (a) 항목을 PR로 정리해 머지했습니다.",
        },
        {
          section: "전체 데이터 흐름",
          image: {
            src: "/memextar_data_flow.svg",
            alt: "MemeXtar 전체 데이터 흐름 다이어그램 — MemeX 활동 데이터에서 Meme Index · PoH multiplier · 컨트랙트 분배까지",
            caption: "MemeXtar 전체 데이터 흐름도",
          },
        },
      ],
      techStack: [
        "Solidity",
        "Slither",
        "SocialFi",
        "Scoring",
        "PoH (Proof-of-Human)",
        "Prediction Market",
      ],
      techStackNote:
        "인프라 측은 React + Vite, Express, MongoDB, Kubernetes(Minikube)로 구성되어 있고, 본인 담당은 위의 컨트랙트/지표 설계 영역입니다.",
      result:
        "Memekathon Seoul 2025 — SocialFi & InfoFi 분야 1st Place 수상.\n\n단순 dApp 구현에 그치지 않고 (1) 봇 저항성을 갖는 영향력 지표 설계, (2) PoH 기반 신뢰 레이어와의 결합, (3) Slither 기반 컨트랙트 보안 검토를 한 시스템 안에서 일관되게 다룬 점이 평가받았다고 생각합니다.",
      retrospective:
        "보상 설계는 기능 구현보다 공격자가 악용할 수 있는 경제적 유인을 먼저 봐야 한다는 점을 배웠습니다. 이후에는 지표 검증을 위한 시뮬레이션과 이상 활동 탐지 대시보드를 붙이면 더 설득력 있는 시스템이 될 수 있습니다.",
    },
  },
  {
    slug: "sui-treaming",
    title: "Sui-treaming",
    role: "Web3 Streaming Protocol",
    period: {
      start: { label: "2025. 09", dateTime: "2025-09" },
    },
    sortKey: "2025-09",
    summary:
      'Twitch 사용자가 Web3 개념을 의식하지 않고 Sui 기반 NFT 구독 경험을 받을 수 있게 하는 스트리밍 프로토콜입니다. zkLogin · Paymaster · Walrus를 결합해 "Twitch에서 평소처럼 활동하면 그게 그대로 온체인 활동"이 되도록 설계했습니다.',
    impact: "Sui-mming Hackathon 2025 — Special Prize",
    tags: [
      "Sui Move",
      "zkLogin",
      "Walrus",
      "Paymaster",
      "Twitch EventSub",
      "Chrome Extension",
      "NFT-gated Access Control",
    ],
    achievements: ["Special Prize", "Web2 → Web3 onboarding"],
    coverImage: "",
    media: [],
    details: {
      overview:
        'Sui-treaming은 Twitch 사용자가 Web3 개념을 의식하지 않고 Sui 기반 NFT 구독 경험을 받을 수 있게 하는 프로토콜입니다. Twitch 로그인만으로 Sui 지갑이 자동 생성되고(zkLogin), 가스비는 Paymaster가 대납하며, 스트리머는 NFT 기반 유료 구독 모델로 새로운 수익원을 만듭니다. "Twitch에서 평소처럼 활동하면 그게 그대로 온체인 활동"이 되도록 240M Twitch 유저를 마찰 없이 온보딩하는 인프라가 목표입니다.',
      problem:
        'Web3 서비스의 진입 비용은 기술이 아니라 UX 곳곳에 누적된 인지 부담에서 발생합니다. 지갑 생성과 시드 관리에서 일반 사용자 대부분이 이탈하고, 가스비 개념은 콘텐츠 1건 구매조차 비직관적으로 만들며, 구독 권한과 온체인 자산의 분리는 진짜 소유와 가벼운 UX 중 하나를 강제로 선택하게 합니다.\n\n스트리머 측에서도 OnlyFans 같은 기존 플랫폼은 높은 수수료 + 부정적 평판이라는 이중 비용을 부담합니다. 핵심 도전은 "사용자가 본인이 Web3를 쓰고 있다는 사실조차 모르도록 만드는 것"입니다.',
      contributions: [
        "NFT 자산의 저장(Storage) → 발행(Mint) 영역을 담당하며, 온체인 비용 문제를 해결하는 하이브리드 스토리지 구조와 Twitch 이벤트 기반 자동 mint 흐름을 설계·구현했습니다.",
        "콘텐츠 본체는 Walrus, 온체인엔 blob ID·메타데이터만 기록하는 하이브리드 스토리지 파이프라인을 구현해 NFT 발행 비용을 수십 배 절감했습니다. Walrus 업로드 성공 후에만 mint 트랜잭션이 발행되도록 순서를 강제해 부분 실패로 인한 비용 누수도 차단했습니다.",
        "Sui Move의 object-centric 모델을 활용해 NFT 소유 자체가 콘텐츠 접근 권한의 증거가 되도록 컨트랙트를 설계했습니다. mint · verify_ownership · 메타데이터 관리 책임을 분리하고, 호출자(Paymaster)와 소유자(follower)를 분리해 가스 대납이 진짜 소유권을 훼손하지 않도록 했습니다.",
        'Twitch EventSub 웹훅을 Paymaster·Move 컨트랙트와 연결해 "채널 포인트 사용 → 자동 NFT 발행" 비동기 흐름을 구현했습니다. EventSub 시그니처 검증, 이벤트 ID 기반 idempotency 처리로 가스 abuse와 중복 발행을 함께 차단했습니다.',
      ],
      implementation: [
        {
          section: "Storage Flow — Walrus 기반 분산 콘텐츠 저장",
          body: "온체인 storage에 이미지·비디오를 직접 올리면 수 MB 데이터에 수십~수백 SUI의 비용이 듭니다. 이는 NFT 발행 모델 자체를 비현실적으로 만들기 때문에, Walrus(Sui 생태계의 분산 blob storage)에 콘텐츠 본체를 저장하고 온체인에는 참조 정보만 기록하는 하이브리드 구조를 채택했습니다.\n\n전체 업로드 흐름:",
          code: "1. Streamer가 Chrome Extension에서 이미지 선택\n2. 이미지 → Walrus 업로드 → blob ID 반환\n3. blob ID + 메타데이터(이름, TTL, 가격) → Move NFT 컨트랙트로 전달\n4. 컨트랙트가 blob ID를 NFT object의 필드로 기록하며 mint\n5. 향후 NFT 조회 시 blob ID로 Walrus에서 실제 이미지 fetch",
          bodyAfter:
            "이 구조의 핵심 장점은 (a) storage 비용 최소화 — 온체인엔 ~32바이트 blob ID만, (b) 콘텐츠 무결성 — Walrus의 해시 기반 주소 지정, (c) 가용성 — 분산 노드들에 복제 저장이라는 세 가지가 동시에 보장된다는 점입니다.",
          images: [
            {
              src: "/warlus.png",
              alt: "Walrus 분산 blob storage 업로드 흐름",
              caption: "Warlus에 데이터를 업로드하는 화면",
            },
          ],
        },
        {
          section: "Move NFT Contract — 구독 권한을 온체인 객체로",
          body: "Sui Move의 object-centric 모델은 NFT를 단순 토큰이 아닌 하나의 독립 객체로 다룹니다. 이 특성을 활용해 NFT 자체가 콘텐츠 접근 권한의 증거가 되도록 설계했습니다.\n\n컨트랙트 구조:",
          items: [
            {
              title: "mint(image_blob_id, metadata, ttl)",
              body: "새 구독 NFT를 발행. 파라미터로 콘텐츠 blob ID, 메타데이터, 만료 시간을 받음. 호출자는 Paymaster(백엔드 sponsor)지만, NFT 소유자는 실제 follower가 되도록 recipient를 명시.",
            },
            {
              title: "transfer / verify_ownership",
              body: "NFT의 owner를 검증해 콘텐츠 접근 권한 판단의 근거 제공.",
            },
            {
              title: "메타데이터 필드",
              body: "service name, package ID, fee, TTL, blob reference 등을 NFT object에 직접 보관.",
            },
          ],
          bodyAfter:
            "Twitch EventSub와의 연동: Channel Point Reward Redemption Event가 발생하면 백엔드 서버가 그 이벤트를 받아 Paymaster를 통해 mint 트랜잭션을 자동 호출합니다. 사용자는 Twitch에서 채널 포인트를 쓰기만 했는데 Sui 지갑에 NFT가 도착하는 경험을 하게 됩니다.",
        },
        {
          section: "Access Policy — Seal로 콘텐츠 자체를 암호화",
          body: "URL을 숨기거나 서버에서 권한을 체크하는 방식은 본질적으로 Web2 권한 모델입니다. 이를 진짜 Web3 권한 모델로 만들기 위해 Seal을 사용해 콘텐츠 본체를 암호화하고, NFT 소유 여부를 복호화 키 접근의 조건으로 걸었습니다.",
          items: [
            {
              title: "Streamer 측 흐름",
              body: "Package ID, Price in Mist, TTL(예: 312분), Service name으로 access policy 정의 → 프리미엄 이미지를 Seal로 암호화 → 암호화된 blob을 Walrus에 업로드 → Service ID를 follower에게 공유.",
            },
            {
              title: "Follower 측 흐름",
              body: "Service ID를 입력해 service load → 가격 지불 후 Subscription NFT 발급 → NFT 소유권을 증거로 Seal에 복호화 요청 → 콘텐츠 접근.",
            },
          ],
          bodyAfter:
            "TTL 기반 자동 만료가 핵심입니다. TTL 312분짜리 서비스라면 NFT 발급 시점부터 312분이 지나면 Seal이 복호화를 거부하기 때문에 서버에서 권한 만료를 따로 관리할 필요가 없습니다. 권한 라이프사이클이 온체인 자산의 라이프사이클과 일치하는 구조입니다.",
          images: [
            {
              src: "/seal.png",
              alt: "Seal 기반 access policy — NFT 소유 여부를 복호화 키 접근 조건으로 사용",
              caption: "Seal을 활용해서 프리미엄 구독 서비스를 제공 및 구독하는 화면",
            },
          ],
        },
        {
          section: "Paymaster Integration — 가스리스 UX",
          body: 'zkLogin이 "지갑 생성·시드 관리·서명" 부담을 없앤다면, Paymaster는 "가스비 부담"을 없앱니다. 둘이 결합되어야 Web2와 구별이 안 되는 경험이 됩니다.\n\n구조:',
          items: [
            {
              title: "Backend Server가 Paymaster 역할 겸직",
              body: "사용자의 트랜잭션을 받아 자신이 sponsor로 가스를 대납하고 실행합니다.",
            },
            {
              title: "주요 액션 전반에 적용",
              body: "mint, subscribe, transfer 등 자금 흐름이 발생하는 주요 액션 모두에 Paymaster 흐름을 적용했습니다.",
            },
            {
              title: "사용자는 SUI를 직접 보유·지불하지 않음",
              body: "어떤 단계에서도 사용자가 SUI를 직접 보유하거나 지불할 필요가 없도록 흐름을 설계했습니다.",
            },
          ],
          bodyAfter:
            "보안 고려: Paymaster가 무제한으로 가스를 대납하면 abuse 벡터가 되므로, (a) 인증된 사용자만 호출 가능, (b) 액션별 rate limit, (c) Twitch 이벤트 기반 트리거에는 자동 승인 같은 정책을 함께 설계했습니다.",
        },
        {
          section: "전체 데이터 흐름",
          image: {
            src: "/sui-treaming%20overview.png",
            alt: "Sui-treaming 시스템 오버뷰 — Twitch 액션부터 NFT 발급, Seal 복호화까지의 전체 흐름",
            caption: "Sui-treaming 시스템 전체 흐름도",
          },
          body: "Twitch 사용자가 채널 포인트를 쓰거나 구독을 클릭하면, Twitch OAuth가 zkLogin을 통해 Sui Wallet을 자동 생성하고, 해당 액션은 Twitch EventSub를 거쳐 Backend Server(Paymaster)에 전달됩니다. Paymaster가 가스비를 대납한 채로 Move Contract의 mint를 호출하면, Walrus에 NFT 이미지가 저장되는 동시에 Seal로 콘텐츠가 암호화되고 access policy가 등록됩니다.\n\n발행된 Subscription NFT는 follower 지갑에 도착하고, follower는 NFT 소유권을 증거로 Seal에 복호화를 요청해 프리미엄 콘텐츠에 접근합니다. TTL이 만료되면 Seal이 복호화를 거부하므로 별도 권한 관리 없이 접근이 자동으로 차단됩니다.",
        },
      ],
      techStack: [
        "Sui Move",
        "zkLogin",
        "Walrus",
        "Paymaster",
        "Twitch EventSub",
        "Chrome Extension",
        "NFT-gated Access Control",
      ],
      result:
        'Sui-mming Hackathon 2025 — Special Prize 수상.\n\nzkLogin · Walrus · Seal · Paymaster를 따로 쓰지 않고 하나의 일관된 사용자 흐름 안에서 결합해 Web2 수준의 마찰 없는 경험을 만들어낸 점이 평가받았다고 생각합니다. 특히 Twitch EventSub와 Paymaster를 연결해 "채널 포인트 사용 → 자동 NFT 발행"까지 단 하나의 사용자 액션으로 완결되는 흐름은 일반 Twitch 유저가 본인이 블록체인을 쓰는지조차 모르게 만드는 핵심 장치였습니다.',
      retrospective:
        '"Web3 온보딩의 진짜 적은 기술이 아니라 인지 부담"이라는 점을 배웠습니다. 좋은 기술 스택을 쌓는 것보다 그 기술들이 사용자에게 보이지 않도록 통합하는 게 훨씬 어렵고 중요했고, 추상화 레이어를 깔끔하게 쌓는 게 SocialFi 인프라의 본질적 기술 과제라는 걸 체감했습니다.',
    },
  },
  {
    slug: "chainstalker",
    title: "ChainStalker",
    role: "Perp DEX AML Detection",
    period: {
      start: { label: "2025. 02", dateTime: "2025-02" },
      end: { label: "2025. 06", dateTime: "2025-06" },
    },
    sortKey: "2025-06",
    summary:
      "Perp DEX의 고레버리지·양방향 포지션 구조를 악용한 자금 세탁을 실시간으로 탐지·추적하기 위해, 온체인 거래 분석과 크로스체인 자금 흐름 추적을 결합한 AML 시스템입니다.",
    impact: "업사이드 아카데미 성과공유회 우수상, UDC 발표",
    tags: [
      "TypeScript",
      "Python",
      "Perp DEX Analysis",
      "AML Modeling",
      "Cross-chain Tracing",
      "On-chain Data",
      "Dashboard",
      "Git",
    ],
    achievements: ["우수상", "UDC 발표"],
    coverImage: "",
    media: [],
    details: {
      overview:
        "ChainStalker는 Perp DEX(탈중앙화 파생상품 거래소)의 고레버리지·양방향 포지션 구조를 악용한 자금 세탁 문제를 해결하기 위해, 온체인 거래 데이터를 실시간으로 분석해 의심 거래를 탐지·추적하는 AML 시스템입니다. 기존 AML 체계가 커버하지 못하는 DeFi 영역의 사각지대를 해소하고, 실시간 자금 흐름 추적과 시각화를 통해 Web3 환경에서 실질적인 자금세탁 방지 체계를 구축하는 것을 목표로 했습니다.",
      problem:
        "기존 AML 시스템은 중앙화 거래소를 중심으로 설계되어, Perp DEX와 같은 탈중앙화 파생상품 거래소의 복잡한 거래 구조를 충분히 반영하지 못하는 한계가 있었습니다. 특히 고레버리지·양방향 포지션·청산 구조는 자금 세탁에 악용될 수 있음에도 이를 탐지할 수 있는 기준이 부재한 상황이었습니다.\n\n이를 해결하기 위해 Perp DEX의 거래 메커니즘을 기반으로 자금 세탁 시나리오를 정의하고, 온체인 데이터를 실시간으로 분석해 의심 거래를 탐지·추적할 수 있는 AML 시스템 구축을 목표로 했습니다.",
      contributions: [
        "자금 세탁 탐지 모델 설계부터 추적 파이프라인, 크로스체인 분석 기능까지 핵심 기능 개발을 담당했습니다.",
        "Perp DEX 구조(레버리지·포지션·청산)를 기반으로 자금 세탁 시나리오를 모델링하고, 손실률·포지션 종료 시점·거래 규모를 조합한 탐지 기준을 정의했습니다.",
        "의심 포지션 탐지 시 카운터파티와 후속 거래를 자동 추적하는 실시간 데이터 파이프라인을 구축했습니다.",
        "브릿지별 트랜잭션 패턴 분석을 통해 크로스체인 자금 흐름을 일관되게 추적하는 브릿지 스캐너를 구현했습니다.",
        "시스템 작동 원리와 탐지 메커니즘을 정리해 규제 기관·보안 팀도 활용할 수 있는 수준의 기술 문서와 매뉴얼을 작성했습니다.",
      ],
      implementation: [
        {
          section: "자금 세탁 시나리오 모델링",
          body: "Perp DEX는 일반 spot 거래와 달리 레버리지·포지션 방향·청산 같은 변수가 동시에 작동하기 때문에, 의심 거래를 '거래 1건' 단위로 보면 정상 거래와 차이가 드러나지 않습니다. 거래 메커니즘을 먼저 분해한 뒤, 위험 지표를 정의했습니다.",
          items: [
            {
              title: "Perp DEX 메커니즘 분해",
              body: "레버리지 모델, 양방향 포지션 구조, 청산 방식을 정리하고 일반 거래와 자금 세탁 의심 거래를 구분 가능하게 만드는 차이점을 식별했습니다.",
            },
            {
              title: "위험 지표 정의",
              body: "손실률, 포지션 종료 시점, 거래 규모, 카운터파티 패턴을 조합한 위험 지표를 정의해 '손실을 감수한 자금 이동'을 정상 거래와 구분할 수 있는 규칙을 만들었습니다.",
            },
          ],
        },
        {
          section: "카운터파티 및 거래 흐름 추적",
          body: "단일 포지션이 의심스럽다는 판단만으로는 자금 세탁 여부를 확정할 수 없기 때문에, 의심 포지션 탐지 즉시 카운터파티와 후속 거래까지 자동 추적하는 실시간 데이터 파이프라인을 구축했습니다.",
          bodyAfter:
            "초기에는 대용량 온체인 데이터를 실시간 처리하는 과정에서 지연이 누적되는 문제가 있었지만, 데이터 수집·분석 로직을 최적화해 실시간성을 확보했습니다.",
          images: [
            {
              src: "/counterparty.png",
              alt: "카운터 분석기 화면 — 의심 포지션의 카운터파티와 후속 거래를 자동 추적",
              caption: "카운터 분석기의 모습 및 결과",
            },
          ],
        },
        {
          section: "브릿지 스캐너 — Cross-chain 자금 흐름 추적",
          body: "자금 세탁 의심 자금은 단일 체인에 머무르지 않기 때문에, 체인마다 다른 트랜잭션 구조를 브릿지별 패턴으로 정규화해 일관된 추적이 가능하도록 설계했습니다.",
          items: [
            {
              title: "브릿지별 패턴 분석",
              body: "체인마다 상이한 트랜잭션 데이터 구조를 브릿지 컨트랙트별 호출 패턴으로 정규화해 크로스체인 자금 흐름을 일관되게 추적할 수 있게 했습니다.",
            },
            {
              title: "최종 출금 경로 시각화",
              body: "다중 체인을 경유하는 의심 자금의 최종 출금 지점까지 추적해 대시보드에 시각화함으로써, 분석가가 자금의 종착지를 한눈에 파악할 수 있게 했습니다.",
            },
          ],
          images: [
            {
              src: "/enter_wallet.png",
              alt: "처음 의심 주소를 넣는 화면",
              caption: "처음 의심 주소를 넣는 화면",
            },
            {
              src: "/graph.png",
              alt: "다중 체인을 경유한 최종 출금 경로 시각화 그래프",
              caption: "최종 출금 경로를 시각화",
            },
          ],
        },
        {
          section: "시각화 대시보드",
          body: "실시간 거래 모니터링과 자동 분석이 가능한 대시보드를 설계·구현했습니다. 이상 포지션 필터링, 카운터 매칭, 자금의 최종 출금 경로까지 한 화면에서 직관적으로 확인할 수 있도록 구성했습니다.",
          images: [
            {
              src: "/dashboard.png",
              alt: "ChainStalker 실시간 분석 대시보드 — 포지션, PnL, 카운터, 출금 경로 통합 뷰",
              caption: "이상거래를 확인하는 실시간 대시보드",
            },
          ],
        },
        {
          section: "기술 문서 및 매뉴얼",
          body: "DeFi에 익숙하지 않은 규제 기관과 보안 팀도 시스템을 활용할 수 있도록, 탐지 메커니즘·시나리오 정의·사용 방법을 정리한 기술 문서와 매뉴얼을 작성해 AML 체계의 실효성을 높였습니다.",
          images: [
            {
              src: "/chainstalker_docs.png",
              alt: "ChainStalker Docs (GitBook) — Perp DEX 자금 세탁 방법과 시스템 작동 원리 문서",
              caption: "AML 시스템 작동 원리를 정리한 기술 문서",
            },
          ],
        },
        {
          section: "도전 과제와 해결",
          items: [
            {
              title: "프로젝트 방향성 부재 및 팀 정체",
              body: "선례가 없는 주제라 초기에는 방향성이 명확하지 않아 논의가 단절되고 팀 사기가 저하됐습니다. '프로토콜 파악 → 기존 방식 비교 → 가설 설정 → 시스템 설계' 4단계로 접근 방식을 구조화하고 역할을 재분배해 협업을 다시 활성화했습니다. 이후 '동일 규모의 반대 포지션으로 자금 흐름을 은닉하는 패턴이 존재할 것'이라는 가설을 세우고, 예상과 다른 결과가 반복되어도 조건을 수정하며 추적을 반복한 끝에 연관 지갑 탐지 시스템을 구현할 수 있었습니다.",
            },
            {
              title: "브릿지 스캐너 성능 저하",
              body: "다수 체인 추적을 위해 여러 API를 호출하는 구조에서 응답 지연·처리 속도 저하가 발생해 실시간 분석 성능이 떨어졌습니다. 불필요한 API 호출을 줄이고 핵심 데이터만 선별적으로 수집하도록 파이프라인을 재설계해, 크로스체인 자금 흐름을 빠르고 안정적으로 추적할 수 있게 했습니다.",
            },
          ],
        },
      ],
      techStack: [
        "TypeScript",
        "Python",
        "Perp DEX Analysis",
        "AML Modeling",
        "Cross-chain Tracing",
        "On-chain Data",
        "Dashboard",
        "Git",
      ],
      result:
        "업사이드 아카데미 성과공유회에서 우수상을 수상하고, UDC(Upbit Developer Conference) 발표로 이어지며 프로젝트의 기술적 완성도와 실무 적용 가능성을 인정받았습니다.\n\nPerp DEX의 구조적 특성을 반영한 자금 세탁 탐지·추적 시스템을 구현함으로써, 기존 AML 체계가 다루지 못했던 DeFi 영역까지 확장할 수 있는 기반을 마련했습니다.",
      retrospective:
        "단순히 데이터를 분석하는 것을 넘어, 도메인 구조를 이해하고 그에 맞는 탐지 기준을 직접 설계하는 능력이 중요하다는 것을 체감했습니다. 특히 자금 세탁 탐지는 개별 거래가 아니라 전체 자금 흐름을 기반으로 판단해야 한다는 점을 이해하게 되었고, 트랜잭션 단위가 아닌 흐름 단위로 사고하는 분석 관점을 확립할 수 있었습니다.\n\n또한 초기의 방향성 부재와 기술적 문제를 해결하는 과정에서, 복잡한 문제일수록 구조화하고 가설 기반으로 접근하는 것이 효과적이라는 점을 배웠습니다. 팀이 정체된 상황에서도 문제를 단계적으로 정리하고 해결 방향을 제시함으로써 협업을 다시 활성화할 수 있었으며, 이는 기술적 역량뿐 아니라 문제 해결 방식 자체를 한 단계 성장시키는 계기가 되었습니다.",
    },
  },
];

export const skills = [
  {
    title: "Security Engineering",
    points: [
      "취약점 분석 결과를 탐지 규칙, 자동화 파이프라인, 보고서 생성 흐름으로 연결합니다.",
      "스마트 컨트랙트 취약점과 온체인 자금 흐름을 시스템 단위로 분석합니다.",
      "분석 결과를 팀과 운영자가 이해할 수 있는 문서와 대시보드 구조로 정리합니다.",
    ],
  },
  {
    title: "Communication",
    points: [
      "상대방의 의견을 존중하고 경청하는 자세를 중요하게 생각합니다.",
      "필요한 순간에는 생각을 분명하게 표현하고 논의를 주도합니다.",
      "배운 내용을 주변 사람들과 나누며 함께 성장하는 문화를 선호합니다.",
    ],
  },
  {
    title: "Python",
    points: [
      "Python 기반 익스플로잇 및 공격 자동화 스크립팅 경험을 보유하고 있습니다.",
      "온체인 데이터 수집, 파싱, 트랜잭션 분석 스크립트 작성에 Python을 활용합니다.",
      "대용량 데이터를 처리하고 의심 패턴을 탐지하는 자동화 로직을 구현할 수 있습니다.",
    ],
  },
  {
    title: "Solidity",
    points: [
      "Solidity를 활용한 스마트 컨트랙트 개발 및 코드 분석이 가능합니다.",
      "Reentrancy, Logic Bug 등 빈번한 취약점 유형을 이해하고 식별, 수정할 수 있습니다.",
    ],
  },
];

export const education = [
  {
    title: "아주대학교 사이버보안학과",
    period: {
      start: { label: "2020. 03", dateTime: "2020-03" },
      end: { label: "2026. 08", dateTime: "2026-08" },
      note: "(졸업예정)",
    },
    body: "사이버보안학과에서 컴퓨터구조, 자료구조, 컴퓨터네트워크 등 CS 과목과 암호 이론, 네트워크 보안, 보안 관제 등 보안 과목을 우수한 성적으로 이수했습니다.",
  },
];

export const otherExperiences = [
  {
    title: "Upside Academy",
    period: {
      start: { label: "2025. 02", dateTime: "2025-02" },
      end: { label: "2025. 06", dateTime: "2025-06" },
    },
    paragraphs: [
      "두나무와 Theori가 함께 운영하는, Web3와 스마트 컨트랙트 보안을 실전 프로젝트 중심으로 학습하는 교육 프로그램을 수료했습니다.",
      '"Perp DEX, 암호화폐 자금세탁의 새로운 경로"를 주제로 팀 프로젝트를 진행했으며, 해당 연구의 우수성을 인정받아 업사이드 아카데미 성과공유회에서 우수상을 수상하고 UDC에서 발표할 기회를 얻었습니다.',
    ],
  },
];
