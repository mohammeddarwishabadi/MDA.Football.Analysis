import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters")
});

export const teamCreateSchema = z.object({
  name: z.string().min(2, "Team name must be at least 2 characters"),
  logoUrl: z.string().url("logoUrl must be a valid URL").optional().nullable()
});

export const playerCreateSchema = z.object({
  name: z.string().min(2),
  teamId: z.string().cuid().optional().nullable(),
  position: z.string().optional().nullable(),
  goals: z.number().int().min(0).default(0),
  assists: z.number().int().min(0).default(0),
  xG: z.number().min(0).default(0),
  keyPasses: z.number().int().min(0).default(0)
});

export const matchCreateSchema = z.object({
  homeTeamId: z.string().cuid(),
  awayTeamId: z.string().cuid(),
  homeGoals: z.number().int().min(0),
  awayGoals: z.number().int().min(0),
  xGHome: z.number().min(0).default(0),
  xGAway: z.number().min(0).default(0),
  bestPlayerId: z.string().cuid().optional().nullable(),
  playedAt: z.string().datetime()
});

export const analysisCreateSchema = z.object({
  title: z.string().min(3),
  type: z.enum(["match", "player", "team"]),
  content: z.string().min(10)
});
