import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ReadingsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Reading({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Readings() {
  return (
    <>
      <Head>
        <title>Readings - Salim Tlemcani</title>
        <meta
          name="description"
          content="Things I'm reading (more on github)."
        />
      </Head>
      <SimpleLayout
        title="Things I'm reading (more on github)."
        intro="I'll start using this page as a memo for me of interesting research papers and books that I'm currently reading or that I need to read. I'll also add some of the books that I've read in the past and that I recommend."
      >
        <div className="space-y-20">
          <ReadingsSection title="Research papers - ML">
            <Reading
              href="https://arxiv.org/pdf/1912.09363.pdf"
              title=" Temporal Fusion Transformers for Interpretable Multi-horizon Time Series Forecasting"
            >
              When studying Transformers, LSTMs, LLMs:
            </Reading>

            <Reading
              href="https://arxiv.org/pdf/2102.03945.pdf"
              title="Variational Autoencoders: A Hands-Off Approach to Volatility"
            >
              When modeling volatility
            </Reading>

            <Reading
              href="http://proceedings.mlr.press/v9/glorot10a/glorot10a.pdf"
              title="Understanding the difficulty of training deep feedforward neural networks"
            >
              When covering Deep Neural Networks gradient instability (notably
              with the study of Vanishing/Exploding Gradients Problem):
            </Reading>

            <Reading
              href="https://arxiv.org/pdf/1505.00853.pdf"
              title="Empirical Evaluation of Rectified Activations in Convolution Network"
            >
              When covering Nonsaturating Activation Functions (notably with
              leaky ReLu)
            </Reading>

            <Reading
              href="https://arxiv.org/pdf/1502.01852.pdf"
              title="Delving Deep into Rectifiers: Surpassing Human-Level Performance on ImageNet Classification"
            >
              When covering activation functions (notably The exponential linear
              unit(ELU)) and their challenges
            </Reading>

            <Reading
              href="https://arxiv.org/pdf/1706.02515.pdf"
              title="Self-Normalizing Neural Networks"
            >
              When covering activation functions (notably the Scaled exponential
              linear unit (SELU) activation function)
            </Reading>

            <Reading
              href="http://proceedings.mlr.press/v37/ioffe15.pdf"
              title="Batch Normalization: Accelerating Deep Network Training by Reducing Internal Covariate Shift"
            >
              When covering batch normalization
            </Reading>

            <Reading
              href="https://arxiv.org/pdf/1901.09321.pdf"
              title="Fixup Initialization: Residual Learning Without Normalization"
            >
              When covering batch normalization and its substitutes such as the
              fixed_update weights presented in the paper
            </Reading>

            <Reading
              href="https://arxiv.org/pdf/1301.3781.pdf"
              title="Efficient Estimation of Word Representations in Vector Space"
            >
              When covering Word2Vec
            </Reading>

            <Reading
              href="https://arxiv.org/pdf/1702.01417.pdf"
              title="All-but-the-top: Simple And Effective Processing For Word Representations"
            >
              When covering GloVe
            </Reading>

            <Reading
              href="https://arxiv.org/pdf/1612.08083.pdf"
              title="Language Modeling with Gated Convolutional Networks"
            >
              When creating the NN architecture of credit scoring, controlling
              the flow of info between categorical and non-categorical
              label-encoded data using GRNs
            </Reading>

            <Reading
              href="https://arxiv.org/pdf/1706.03762v5.pdf"
              title="Attention Is All You Need"
            >
              THE CLASSIC ! When working on attention mechanisms
            </Reading>

            <Reading
              href="https://papers.nips.cc/paper/5346-sequence-to-sequence-learning-with-neural-networks.pdf"
              title="Sequence to Sequence Learning with Neural Networks"
            >
              Skimmed through only. Maybe I&apos;ll get back to it later.
            </Reading>

            <Reading
              href="https://arxiv.org/abs/1502.03044"
              title="Show, Attend and Tell: Neural Image Caption Generation with Visual Attention"
            >
              Skimmed through only. Maybe I&apos;ll get back to it later.
            </Reading>

            <Reading
              href="https://arxiv.org/abs/2010.11929"
              title="An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale"
            >
              Skimmed through only. Maybe I&apos;ll get back to it later.
            </Reading>
          </ReadingsSection>
          <ReadingsSection title="Quant Strats">
            <Reading
              href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2554010"
              title="Ornight Returns and Firm-Specific Investor Sentiment"
            ></Reading>
            {/* The Formation Process of Winners and Losers in Momentum Investing */}
            <Reading
              href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2610571"
              title="The Formation Process of Winners and Losers in Momentum Investing"
            ></Reading>
            {/* Expected Skewness and Momentum */}
            <Reading
              href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2600014"
              title="Expected Skewness and Momentum"
            ></Reading>
            {/* Arbitrage Asymmetry and the Idiosyncratic Volatility Puzzle */}
            <Reading
              href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2155491"
              title="Arbitrage Asymmetry and the Idiosyncratic Volatility Puzzle"
            ></Reading>
            {/* Arbitrage Asymmetry and the Idiosyncratic Volatility Puzzle */}
          </ReadingsSection>
          <ReadingsSection title="Books - Finance">
            <Reading
              href="https://www.amazon.co.uk/Options-Futures-Other-Derivatives-United/dp/0131499084"
              title="Options, Futures and Other Derivatives"
            >
              The &quot;bible&quot; in finance: Options, Futures and Other
              Derivatives, by John C. Hull
            </Reading>
            <Reading
              href="https://www.amazon.co.uk/Exotic-Options-Hybrids-Wiley-Finance/dp/0470688033"
              title="Exotic Options and Hybrids: A Guide to Structuring, Pricing and Trading"
            >
              Exotic Options and Hybrids: A Guide to Structuring, Pricing and
              Trading, by Mohamed Bouzoubaa (Moroccan Author !) and Adel
              Osseiran
            </Reading>
          </ReadingsSection>

          <ReadingsSection title="Books I need to read">
            <Reading
              href="https://www.amazon.co.uk/Volatility-Surface-Practitioners-Guide-Finance/dp/0471792519"
              title="Prof. Enrico Biffis recommendation - The Volatility Surface: A Practitioner`'`s Guide"
            >
              The Volatility Surface: A PractitionerReadings Guide, by Jim
              Gatheral
            </Reading>
            <Reading
              href="https://www.amazon.co.uk/Advanced-Equity-Derivatives-Volatility-Correlation/dp/1118750969"
              title="Advanced equity derivatives volatility and correlation"
            >
              Advanced equity derivatives volatility and correlation / 1st
              edition, Bossu, Sébastien, author. Hoboken, New Jersey : John
              Wiley & Sons; 2014; Wiley Finance Series; Wiley finance series.
            </Reading>
          </ReadingsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
