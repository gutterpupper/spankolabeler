import { LabelSet } from './types.js';

const SPANKING_LABELS: LabelSet = {
  labelsThreadFormat: 'thread',
  labelLimit: 1,
  rootPostContent: 'Like the replies to this post to add an spanko label to your account to help identify yourself!',
  deletePost: {
    rkey: '3lbfspgzh2o2b',
    content: 'Want to remove? Like this post to delete the label from your account.',
  },
  labels: [
    {
      rkey: '3lbfspgnrte2c',
      identifier: 'spanko',
      post: 'Like this post to give yourself the Spanko label.',
      locales: [
        {
          lang: 'en',
          name: 'Spanko',
          description: 'This user marked themselves as a Spanko.',
        },
      ],
    },
    {
      rkey: '3lbfspgqpnv2x',
      identifier: 'spanker',
      post: 'Like this post to give yourself the Spanker label.',
      locales: [
        {
          lang: 'en',
          name: 'Spanker',
          description: 'This user likes to give spankings.',
        },
      ],
    },
    {
      rkey: '3lbfspgtqi72n',
      identifier: 'spankee',
      post: 'Like this post to give yourself the Spankee label.',
      locales: [
        { lang: 'en', 
          name: 'Spankee', 
          description: 'This user likes to be spanked.' },
      ],
    },
    {
      rkey: '3lbfspgwme72l',
      identifier: 'switch',
      post: 'Like this post to give yourself the Switch label.',
      locales: [{ 
        lang: 'en', 
        name: 'Switch', 
        description: 'This user likes to give and receive spankings.' }],
    },
  ],
};

export const LABEL_SETS: LabelSet[] = [SPANKING_LABELS];
