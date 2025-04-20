export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      administrators: {
        Row: {
          auth_user_id: string | null
          email: string
          id: string
          nom: string | null
          password_hash: string
          prénom: string | null
        }
        Insert: {
          auth_user_id?: string | null
          email: string
          id?: string
          nom?: string | null
          password_hash: string
          prénom?: string | null
        }
        Update: {
          auth_user_id?: string | null
          email?: string
          id?: string
          nom?: string | null
          password_hash?: string
          prénom?: string | null
        }
        Relationships: []
      }
      agents: {
        Row: {
          administrator_id: string | null
          email: string
          id: string
          nom: string | null
          password_hash: string
          prénom: string | null
          site_affecté: string | null
          téléphone: string | null
        }
        Insert: {
          administrator_id?: string | null
          email: string
          id?: string
          nom?: string | null
          password_hash: string
          prénom?: string | null
          site_affecté?: string | null
          téléphone?: string | null
        }
        Update: {
          administrator_id?: string | null
          email?: string
          id?: string
          nom?: string | null
          password_hash?: string
          prénom?: string | null
          site_affecté?: string | null
          téléphone?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "agents_administrator_id_fkey"
            columns: ["administrator_id"]
            isOneToOne: false
            referencedRelation: "administrators"
            referencedColumns: ["id"]
          },
        ]
      }
      clients: {
        Row: {
          administrator_id: string | null
          contact: string | null
          email: string
          id: string
          nom_entreprise: string | null
          password_hash: string
          telephone: string | null
        }
        Insert: {
          administrator_id?: string | null
          contact?: string | null
          email: string
          id?: string
          nom_entreprise?: string | null
          password_hash: string
          telephone?: string | null
        }
        Update: {
          administrator_id?: string | null
          contact?: string | null
          email?: string
          id?: string
          nom_entreprise?: string | null
          password_hash?: string
          telephone?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "clients_administrator_id_fkey"
            columns: ["administrator_id"]
            isOneToOne: false
            referencedRelation: "administrators"
            referencedColumns: ["id"]
          },
        ]
      }
      medias: {
        Row: {
          bucket_id: string
          city_reference: string | null
          content_type: string
          created_at: string
          description: string | null
          id: string
          is_public: boolean
          name: string
          service_reference: string | null
          size: number
          storage_path: string
          updated_at: string
        }
        Insert: {
          bucket_id: string
          city_reference?: string | null
          content_type: string
          created_at?: string
          description?: string | null
          id?: string
          is_public?: boolean
          name: string
          service_reference?: string | null
          size: number
          storage_path: string
          updated_at?: string
        }
        Update: {
          bucket_id?: string
          city_reference?: string | null
          content_type?: string
          created_at?: string
          description?: string | null
          id?: string
          is_public?: boolean
          name?: string
          service_reference?: string | null
          size?: number
          storage_path?: string
          updated_at?: string
        }
        Relationships: []
      }
      messages: {
        Row: {
          contenu: string | null
          id: string
          lu: boolean | null
          receiver_id: string
          sender_id: string
          sender_type: string | null
          timestamp: string | null
        }
        Insert: {
          contenu?: string | null
          id?: string
          lu?: boolean | null
          receiver_id: string
          sender_id: string
          sender_type?: string | null
          timestamp?: string | null
        }
        Update: {
          contenu?: string | null
          id?: string
          lu?: boolean | null
          receiver_id?: string
          sender_id?: string
          sender_type?: string | null
          timestamp?: string | null
        }
        Relationships: []
      }
      plannings: {
        Row: {
          agent_id: string | null
          client_id: string | null
          date: string | null
          heure_début: string | null
          heure_fin: string | null
          id: string
          site: string | null
        }
        Insert: {
          agent_id?: string | null
          client_id?: string | null
          date?: string | null
          heure_début?: string | null
          heure_fin?: string | null
          id?: string
          site?: string | null
        }
        Update: {
          agent_id?: string | null
          client_id?: string | null
          date?: string | null
          heure_début?: string | null
          heure_fin?: string | null
          id?: string
          site?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "plannings_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "plannings_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      sites: {
        Row: {
          administrator_id: string | null
          adresse: string | null
          id: string
          nom: string | null
          ville: string | null
        }
        Insert: {
          administrator_id?: string | null
          adresse?: string | null
          id?: string
          nom?: string | null
          ville?: string | null
        }
        Update: {
          administrator_id?: string | null
          adresse?: string | null
          id?: string
          nom?: string | null
          ville?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sites_administrator_id_fkey"
            columns: ["administrator_id"]
            isOneToOne: false
            referencedRelation: "administrators"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      is_admin: {
        Args: { user_id: string }
        Returns: boolean
      }
      is_agent: {
        Args: { profile_id: string }
        Returns: boolean
      }
    }
    Enums: {
      user_role: "admin" | "agent" | "client"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      user_role: ["admin", "agent", "client"],
    },
  },
} as const
