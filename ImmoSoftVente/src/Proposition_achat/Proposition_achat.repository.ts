import { EntityRepository, Repository } from 'typeorm';

import { PropositionAchat } from './Proposition_achat.entity';

@EntityRepository(PropositionAchat)
export class PropositionAchatRepository extends Repository<PropositionAchat> {}
