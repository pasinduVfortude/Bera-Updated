import { PartialType } from '@nestjs/mapped-types';
import { CreateFiledetailDto } from './create-filedetail.dto';

export class UpdateFiledetailDto extends PartialType(CreateFiledetailDto) {}
