import { ApiProperty } from '@nestjs/swagger';
import { Length, IsString } from 'class-validator';

export class SuggestionsOptionsDto {
  @ApiProperty({
    description: 'The query to search for',
    example: 'Tesla 3',
    minLength: 3,
    maxLength: 255,
  })
  @IsString()
  @Length(3, 255)
  query: string;
}
